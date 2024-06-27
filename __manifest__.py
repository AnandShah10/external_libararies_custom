{
    'name': 'external_libraries_custom',
    'version': '1.0',
    'summary': "external libraries",
    'sequence': 10,
    'author': "Anand Shah",
    'description': """
    Just a practice module for external libraries in with owl.js
""",
    'category': 'Custom/service',
    'depends': ['base', 'web', 'web_editor'],
    'data': [
        'views/templates.xml',
    ],
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
    'assets': {
        'web.assets_backend': [
                               'external_libraries_custom/static/src/js/external_library.js',
                               'external_libraries_custom/static/src/xml/external_library.xml',
        ],
    }

}
