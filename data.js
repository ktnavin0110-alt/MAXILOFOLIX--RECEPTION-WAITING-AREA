var APP_DATA = {
  "scenes": [
    {
      "id": "0-gf-entry",
      "name": "GF ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5193727878212382,
        "pitch": 0.010801033491063095,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -0.45588501587573305,
          "pitch": 0.3862496498510417,
          "rotation": 1.5707963267948966,
          "target": "2-reception-view-1"
        },
        {
          "yaw": -1.0529480361666401,
          "pitch": 0.19860596814100617,
          "rotation": 4.71238898038469,
          "target": "1-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-waiting-area",
      "name": "WAITING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.015273897484682664,
          "pitch": 0.07056363196410942,
          "rotation": 0,
          "target": "2-reception-view-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9978573260306423,
          "pitch": 0.0753959269088984,
          "title": "DENTAL ROOM 2",
          "text": "<br>"
        },
        {
          "yaw": -2.2481348860576755,
          "pitch": 0.027163974837272065,
          "title": "DENTAL ROOM 3",
          "text": "<br>"
        },
        {
          "yaw": -2.631791851473656,
          "pitch": 0.10357729246073788,
          "title": "KIDS PLAY AREA",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "2-reception-view-1",
      "name": "RECEPTION VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9820044992064147,
          "pitch": 0.1604894914599324,
          "rotation": 0,
          "target": "1-waiting-area"
        },
        {
          "yaw": 1.3509743386886583,
          "pitch": 0.12078690523797064,
          "rotation": 0,
          "target": "0-gf-entry"
        },
        {
          "yaw": -0.7481377663730697,
          "pitch": 0.21487326803463347,
          "rotation": 4.71238898038469,
          "target": "3-reception-view-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.50458537113178,
          "pitch": 0.12417388008665142,
          "title": "DENTAL ROOM 2",
          "text": "<br>"
        },
        {
          "yaw": -2.8503304762047073,
          "pitch": 0.03626507572220561,
          "title": "DENTAL ROOM 3",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "3-reception-view-2",
      "name": "RECEPTION VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08231721815100101,
          "pitch": 0.14862940003695613,
          "rotation": 1.5707963267948966,
          "target": "1-waiting-area"
        },
        {
          "yaw": -0.4573882417511115,
          "pitch": 0.39811627358048085,
          "rotation": 0,
          "target": "2-reception-view-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.456281525318862,
          "pitch": -0.10549634973046906,
          "title": "DENTAL ROOM 1",
          "text": "<br>"
        },
        {
          "yaw": 2.1475990289534783,
          "pitch": -0.01862889102181242,
          "title": "CONSULTATION ROOM",
          "text": "<br>"
        },
        {
          "yaw": -2.569615240019578,
          "pitch": 0.02145980656013613,
          "title": "PLASTER ROOM",
          "text": "<br>"
        },
        {
          "yaw": -2.056169537811588,
          "pitch": -0.01033062185127065,
          "title": "STERILIZATION ROOM",
          "text": "<br>"
        },
        {
          "yaw": -2.8066341144346634,
          "pitch": 0.03631549277555024,
          "title": "TOILETS",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "MAXILOFOLIX - RECEPTION & WAITING AREA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
