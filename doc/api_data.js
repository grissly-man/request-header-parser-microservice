define({ "api": [
  {
    "type": "get",
    "url": "/whoami",
    "title": "",
    "description": "<p>Returns header information of the user</p>",
    "name": "whoami",
    "group": "HeaderParser",
    "examples": [
      {
        "title": "Request-Example:",
        "content": "https://header-parser-logan.herokuapp.com/whoami",
        "type": "url"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ipaddress",
            "description": "<p>The client's IP address</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "language",
            "description": "<p>The client's language</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "software",
            "description": "<p>The client's software</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"ipaddress\":\"24.252.88.14\",\"language\":\"en-US\",\"software\":\"X11; CrOS x86_64 9000.91.0\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "HeaderParser"
  }
] });
