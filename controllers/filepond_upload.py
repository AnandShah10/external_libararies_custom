from odoo import http
from base64 import b64encode
import json
class FilePondUpload(http.Controller):
    @http.route('/filepond/process',type='http',auth='user',methods=['POST'],csrf=False)
    def uplaod_files(self):
        filepond = http.request.params.get('filepond')
        file = b64encode(filepond.read())
        attachment = http.request.env['ir.attachment'].create({
            'name':filepond.filename,
            'datas':file,
        })
        if not attachment:
            return False
        return str(attachment.id)

    @http.route('/filepond/revert', type='http', auth='user', methods=['DELETE'], csrf=False)
    def revert_files(self):
        id = json.loads(http.request.httprequest.data)
        print(id)
        attachment = http.request.env['ir.attachment'].search([('id','=',id)])
        print(attachment)
        if attachment:
            attachment.unlink()
        return ''