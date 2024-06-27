/**@odoo-module**/

import { registry } from "@web/core/registry";
import { Component,useRef,useState,onWillStart,onMounted } from "@odoo/owl";
import {useService} from "@web/core/utils/hooks";
import {loadJS,loadCSS} from "@web/core/assets";
class OdooExternalLibraries extends Component{
    setup()
    {   this.phone=useRef('phone')
        this.iti
        this.file = useRef('file')
        this.state = useState({phoneValid:undefined})
        console.log("Before Load")
        onWillStart(async ()=>{
//            await loadJS("external_libraries_custom/static/src/lib/intel_tel_input/build/js/intlTelInput.min.js")
//            await loadCSS("external_libraries_custom/static/src/lib/intel_tel_input/build/css/intlTelInput.css")
                await loadCSS("https://cdn.jsdelivr.net/npm/intl-tel-input@23.1.0/build/css/intlTelInput.css")
                await loadJS('https://cdn.jsdelivr.net/npm/intl-tel-input@23.1.0/build/js/intlTelInput.min.js')
                await loadCSS('https://unpkg.com/filepond@^4/dist/filepond.css')
                await loadJS('https://unpkg.com/filepond@^4/dist/filepond.js')
                await loadCSS("https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css")
                await loadJS("https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js")
        })
        console.log("After load")
        onMounted(()=>{
           this.iti= intlTelInput(this.phone.el,{
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.1.0/build/js/utils.js",})
            FilePond.registerPlugin(FilePondPluginImagePreview);
            FilePond.create(this.file.el,{
            allowMultiple:true,
            allowReorder:true,
             server: {
                process: '/filepond/process',
                fetch: null,
                revert: '/filepond/revert',
            },
            })
        })
        console.log("after mounting")

    }
    validate()
    {
        const number = this.iti.getNumber()
        const country = this.iti.getSelectedCountryData()
        if(this.iti.isValidNumber())
        {
            this.state.phoneValid = true
        }
        else{
            this.state.phoneValid = false
        }
    }

}
OdooExternalLibraries.template="external_libraries_custom.odooExternalLibraries";
registry.category("actions").add('odooExternalLibraries',OdooExternalLibraries);