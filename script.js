TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD597C83_D4DF_1293_41A7_759F3926FC2C_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 30,
           "width": 37,
           "url": "media/panorama_DD597C83_D4DF_1293_41A7_759F3926FC2C_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.06,
        "yaw": -1.67,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.47
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_DA2ACCDC_D4E5_32B5_41D4_539B68600B1A",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F, this.camera_C86B9A02_DA40_EA81_41A8_8C0DB97FE344); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "yaw": -1.67,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.06,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 75,
           "url": "media/panorama_DD597C83_D4DF_1293_41A7_759F3926FC2C_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.47
       }
      ]
     },
     {
      "bleachingDistance": 0.4,
      "id": "overlay_FE24D1C6_D57D_1295_41D6_EFD14B336116",
      "class": "LensFlarePanoramaOverlay",
      "yaw": 157.29,
      "bleaching": 0.7,
      "pitch": 13.21
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD597C83_D4DF_1293_41A7_759F3926FC2C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD597C83_D4DF_1293_41A7_759F3926FC2C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD597C83_D4DF_1293_41A7_759F3926FC2C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD597C83_D4DF_1293_41A7_759F3926FC2C_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "1_pano1",
  "hfov": 360,
  "vfov": 180
 },
 {
  "buttonCardboardView": "this.IconButton_F9786E62_D52F_147E_4181_C63224778A3E",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_rotation",
  "gyroscopeEnabled": true,
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation"
 },
 {
  "id": "panorama_DD597C83_D4DF_1293_41A7_759F3926FC2C_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 19,
           "width": 25,
           "url": "media/panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 4.83,
        "yaw": -4.09,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 1.91
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_DBA87C95_D4E7_12B7_41E4_36F1805214FC",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988, this.camera_CA2C4AA5_DA40_EB82_41E6_9D7671FA17B4); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "items": [
       {
        "yaw": -4.09,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.83,
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 51,
           "url": "media/panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.91
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 20,
           "url": "media/panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 3.86,
        "yaw": 177.96,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.31
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_DB665758_D4E5_3FBD_41E8_B14B809EFC77",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD597C83_D4DF_1293_41A7_759F3926FC2C, this.camera_CA29DAB4_DA40_EB82_41E9_E37B92F4F391); this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "items": [
       {
        "yaw": 177.96,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.86,
        "image": {
         "levels": [
          {
           "height": 33,
           "width": 41,
           "url": "media/panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.31
       }
      ]
     },
     {
      "bleachingDistance": 0.4,
      "id": "overlay_FE105978_D57D_327D_41E7_A545EE28F7D0",
      "class": "LensFlarePanoramaOverlay",
      "yaw": 129.22,
      "bleaching": 0.7,
      "pitch": 21.47
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "1_pano2",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 48,
           "url": "media/panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 9,
        "yaw": -21.83,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 5.73
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C44A69AC_D4E3_1295_41D0_95700C6C9E9B",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532, this.camera_CA189B33_DA40_EA86_41D9_213F4AA7E98A); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "items": [
       {
        "yaw": -21.83,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9,
        "image": {
         "levels": [
          {
           "height": 78,
           "width": 96,
           "url": "media/panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.73
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 58,
           "url": "media/panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.44,
        "yaw": -168.73,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.17
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C4475251_D4E3_318F_41DD_EAC7FD157EF9",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F, this.camera_CA1F7B24_DA40_EA82_41DC_7DA59377F4F2); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "yaw": -168.73,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 117,
           "url": "media/panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.17
       }
      ]
     },
     {
      "bleachingDistance": 0.4,
      "id": "overlay_FFA8B450_D562_F18D_41D3_04A0B7E8384B",
      "class": "LensFlarePanoramaOverlay",
      "yaw": 135.83,
      "bleaching": 0.7,
      "pitch": 20.23
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "1_pano3",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 26,
           "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 4.85,
        "yaw": 64.78,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.34
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C474D915_D4FF_33B7_41DF_E6E0A5B52024",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E, this.camera_CA187743_DA40_1A86_41DD_EAAAF181B087); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "items": [
       {
        "yaw": 64.78,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.85,
        "image": {
         "levels": [
          {
           "height": 42,
           "width": 52,
           "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.34
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 75,
           "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 13.39,
        "yaw": -165.04,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.82
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C56A88A7_D4FD_1293_41D1_237A5D81CD91",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988, this.camera_CA1FE735_DA40_1A82_41D8_643312F63F32); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "items": [
       {
        "yaw": -165.04,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.39,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 151,
           "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.82
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 44,
           "width": 51,
           "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 9.06,
        "yaw": 115.02,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.61
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C6ABD4B3_D4FD_32F3_41E3_5B554FA2EE2E",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF, this.camera_CA05F727_DA40_1A8E_41E5_71C10692B30A); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "items": [
       {
        "yaw": 115.02,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.06,
        "image": {
         "levels": [
          {
           "height": 89,
           "width": 103,
           "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.61
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 30,
           "width": 31,
           "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.15,
        "yaw": -15.56,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -28.4
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_E6F44B02_D57D_1DBE_41E4_DAF66D05BB3E",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://forms.gle/U1XvnK2Z1XP3qTN48\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -15.56,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.15,
        "image": {
         "levels": [
          {
           "height": 60,
           "width": 62,
           "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.4
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.21,
        "yaw": -9.04,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.06
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_E38FCC04_D567_3BBA_41D5_EB3FCB87B90D",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_E5A21F69_D567_744A_4188_29BA5E7C504D, null, false)"
       }
      ],
      "items": [
       {
        "yaw": -9.04,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.21,
        "image": {
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.06
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "1_pano4",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 36,
           "width": 46,
           "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.53,
        "yaw": -134.5,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.85
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C53CF36A_D4E3_179D_41CE_9575406CA609",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E, this.camera_CB5D98A1_DA40_1782_41D4_0D43D088D05A); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "items": [
       {
        "yaw": -134.5,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.53,
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 93,
           "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.85
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 45,
           "width": 38,
           "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.02,
        "yaw": 48.37,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.2
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C653CA4D_D4E3_1197_41D1_48FC03BA3B71",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "items": [
       {
        "yaw": 48.37,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.02,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 77,
           "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.2
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 57,
           "width": 49,
           "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.72,
        "yaw": 112.43,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.48
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C65DB4CB_D4E5_1293_41D9_62F8E8DC6A94",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532, this.camera_CB49D880_DA40_1782_41D3_E1A728120844); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "items": [
       {
        "yaw": 112.43,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.72,
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 99,
           "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.48
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 46,
           "width": 45,
           "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.23,
        "yaw": -1.71,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -31.15
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_FB70350A_D5EF_15CF_41E7_1B0E3CEFC0DC",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_FB50BAB3_D5EE_FCDE_41B9_086DE60B58C3, null, false)"
       }
      ],
      "items": [
       {
        "yaw": -1.71,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.23,
        "image": {
         "levels": [
          {
           "height": 93,
           "width": 90,
           "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -31.15
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 25,
           "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 4.76,
        "yaw": -97.83,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.63
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F8B2AC46_D527_3446_41E3_B857172E0BCD",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_E7DFCA41_D527_1FBA_41E9_9CEB49713BA9, {'rollOverIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':5,'pressedIconColor':'#888888','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':20,'pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconLineWidth':5}, this.ImageResource_C81060EA_D866_DC96_41E6_67A41116E678, null, null, null, null, false)"
       }
      ],
      "items": [
       {
        "yaw": -97.83,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.76,
        "image": {
         "levels": [
          {
           "height": 46,
           "width": 50,
           "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.63
       }
      ]
     },
     {
      "rotationZ": 0,
      "hfov": 4.76,
      "yaw": -97.83,
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "popupMaxWidth": "95%",
      "image": {
       "levels": [
        {
         "height": 609,
         "width": 1024,
         "url": "media/popup_E7DFCA41_D527_1FBA_41E9_9CEB49713BA9_0_2.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "popupMaxHeight": "95%",
      "id": "popup_E7DFCA41_D527_1FBA_41E9_9CEB49713BA9",
      "rotationX": 0,
      "showDuration": 500,
      "hideDuration": 500,
      "rotationY": 0,
      "pitch": -1.63
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "1_pano5",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 41,
           "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.58,
        "yaw": -117.48,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.15
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C61E5B3D_D4E7_17F7_41E2_69DF15F9356A",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532, this.camera_CAD737E4_DA40_1982_41E3_9903458B46CA); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "items": [
       {
        "yaw": -117.48,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.58,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 82,
           "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.15
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 48,
           "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.68,
        "yaw": 66.78,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.44
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C7168D70_D4E7_138D_41E0_BBA37B0C0A53",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D, this.camera_CAA4E800_DA40_1682_41DE_03E4802E801C); this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "items": [
       {
        "yaw": 66.78,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.68,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 96,
           "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.44
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 60,
           "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.93,
        "yaw": -151.87,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.7
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C04DE3D5_D4E5_16B7_41D2_9661F2E8A83A",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF, this.camera_CAAE87F2_DA40_1986_41E7_FDB7CCDBFF9D); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "items": [
       {
        "yaw": -151.87,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.93,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 121,
           "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.7
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 48,
           "width": 48,
           "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 9.14,
        "yaw": -7.27,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 1.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F89A2FF4_D5E3_745B_41C7_455459324737",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_FBD8622A_D5E3_6FCF_41B5_F5FABCE5C6CE, {'rollOverIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':5,'pressedIconColor':'#888888','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':20,'pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconLineWidth':5}, this.ImageResource_E5E75F80_D5E3_34BA_41D0_B3E8A4ABAE7A, null, null, null, null, false)"
       }
      ],
      "items": [
       {
        "yaw": -7.27,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.14,
        "image": {
         "levels": [
          {
           "height": 96,
           "width": 97,
           "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.22
       }
      ]
     },
     {
      "rotationZ": 0,
      "hfov": 9.14,
      "yaw": -7.27,
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "popupMaxWidth": "95%",
      "image": {
       "levels": [
        {
         "height": 724,
         "width": 1023,
         "url": "media/popup_FBD8622A_D5E3_6FCF_41B5_F5FABCE5C6CE_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "popupMaxHeight": "95%",
      "id": "popup_FBD8622A_D5E3_6FCF_41B5_F5FABCE5C6CE",
      "rotationX": 0,
      "showDuration": 500,
      "hideDuration": 500,
      "rotationY": 0,
      "pitch": 1.22
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 30,
           "width": 30,
           "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.78,
        "yaw": 125.21,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.98
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_E6C010B6_D565_2CC6_41E9_16020CF62A72",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_E5B6E171_D565_2C5A_41DC_62745C85C741, {'rollOverIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':5,'pressedIconColor':'#888888','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':20,'pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconLineWidth':5}, this.ImageResource_C81EC0F2_D866_DC76_41B2_0AF736998794, null, null, null, null, false)"
       }
      ],
      "items": [
       {
        "yaw": 125.21,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.78,
        "image": {
         "levels": [
          {
           "height": 61,
           "width": 61,
           "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.98
       }
      ]
     },
     {
      "rotationZ": 0,
      "hfov": 5.78,
      "yaw": 125.21,
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "popupMaxWidth": "95%",
      "image": {
       "levels": [
        {
         "height": 609,
         "width": 1024,
         "url": "media/popup_E5B6E171_D565_2C5A_41DC_62745C85C741_0_2.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "popupMaxHeight": "95%",
      "id": "popup_E5B6E171_D565_2C5A_41DC_62745C85C741",
      "rotationX": 0,
      "showDuration": 500,
      "hideDuration": 500,
      "rotationY": 0,
      "pitch": -1.98
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "1_pano6",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 36,
           "width": 73,
           "url": "media/panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 13.68,
        "yaw": 89.27,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.35
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C0B7380A_D4E5_119D_41E9_1AC046A4E8A2",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E, this.camera_CA503A97_DA40_EB8E_41E0_EB959A38662F); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "items": [
       {
        "yaw": 89.27,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.68,
        "image": {
         "levels": [
          {
           "height": 72,
           "width": 146,
           "url": "media/panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.35
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 41,
           "url": "media/panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.68,
        "yaw": -2.42,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.85
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C167DD62_D4E5_338D_41D4_B4A73843F626",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03, this.camera_CA542A89_DA40_EB83_41E7_0821FC340670); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "items": [
       {
        "yaw": -2.42,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.68,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 83,
           "url": "media/panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.85
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "1_pano7",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 58,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.79,
        "yaw": 146.61,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.92
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C1F4C392_D4E3_168D_419D_53BA1991E203",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78, this.camera_CBBEC9BB_DA40_E987_41C3_0E5C84905B19); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "items": [
       {
        "yaw": 146.61,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.79,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 117,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.92
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 52,
           "width": 35,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 6.66,
        "yaw": 176,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.07
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C16E8A11_D4ED_118C_41CF_5144644DDB64",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D, this.camera_CB84B9E6_DA40_E981_41D5_66355E4EFE0E); this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "items": [
       {
        "yaw": 176,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.66,
        "image": {
         "levels": [
          {
           "height": 104,
           "width": 71,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.07
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 58,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.81,
        "yaw": -149,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.37
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C2C70A61_D4ED_118F_41D9_A91EBF1B8F58",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083, this.camera_CB96E9F5_DA40_E983_41CC_17576795D02E); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "items": [
       {
        "yaw": -149,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.81,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 117,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.37
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 58,
           "width": 50,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 9.06,
        "yaw": -38.92,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.89
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C179D869_D4EF_319C_41C4_921E7DD9850F",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061, this.camera_CBB0F9D5_DA40_E983_41D6_3D27C2335217); this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "items": [
       {
        "yaw": -38.92,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.06,
        "image": {
         "levels": [
          {
           "height": 116,
           "width": 100,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.89
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 55,
           "width": 48,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.82,
        "yaw": 32.69,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.69
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C2F993AC_D4EF_1694_41CB_3435A0E5DC9D",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346, this.camera_CBAA89A1_DA40_E983_41DA_6DE386334DAE); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "items": [
       {
        "yaw": 32.69,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.82,
        "image": {
         "levels": [
          {
           "height": 110,
           "width": 97,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.69
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 27,
           "width": 27,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.04,
        "yaw": -1,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 15.39
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_FBAFE94A_D523_1C4E_41D7_1194CF3444A1",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1OUelQ_5dfPtbV6xsu48uhngV_sg2-Dd2/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -1,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.04,
        "image": {
         "levels": [
          {
           "height": 55,
           "width": 55,
           "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 15.39
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "1_pano8",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 58,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.73,
        "yaw": 96.73,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.49
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C2D3051D_D4ED_F3B7_41D0_ED585FD9EA1B",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083, this.camera_CA839839_DA40_1682_41E6_02D5DCBB457F); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "items": [
       {
        "yaw": 96.73,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.73,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 117,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.49
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 58,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.36,
        "yaw": 166.91,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.4
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C3701E6A_D4ED_719D_41D9_1A3544879FD5",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03, this.camera_CABCC80E_DA40_169E_41C4_1FEE085DA2D2); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "items": [
       {
        "yaw": 166.91,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.36,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 117,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.4
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 64,
           "width": 31,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.76,
        "yaw": 160.3,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.39
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C3823056_D4E7_11B5_41DD_81E2CCC82544",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061, this.camera_CAB2781B_DA40_1686_41E7_BB9AEC38C053); this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "items": [
       {
        "yaw": 160.3,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.76,
        "image": {
         "levels": [
          {
           "height": 128,
           "width": 62,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.39
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 58,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.36,
        "yaw": -163.78,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.4
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CC5A3E71_D4E5_718F_41CF_FE563EDE1DE9",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346, this.camera_CA8AC82A_DA40_1686_41E9_DDFAD1948F52); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "items": [
       {
        "yaw": -163.78,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.36,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 117,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.4
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 28,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.05,
        "yaw": 20.04,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.79
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D4A3463B_D9F6_E015_41BC_8AF8C1A32461",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1vAGdj5D30c7eihc9dt-DroPC3VKyd6eO/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": 20.04,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.05,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 56,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.79
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 28,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.06,
        "yaw": -68.34,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D779F6B4_DA0B_6012_4190_E03195AB64F5",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1ObyS63mcEVnwaZhRkQHw_Wx1OXZ7A1vn/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -68.34,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.06,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 56,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.22
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 28,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.07,
        "yaw": -122.56,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.77
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D7D2F41C_DA15_6013_41C6_DCB41742D605",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1OVg_NLUC-HPV67dIHCzi43tw4uAL1y1j/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -122.56,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.07,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 56,
           "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.77
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "1_pano9",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 67,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 12.16,
        "yaw": -106.83,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.86
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C24FC23E_D4E3_F1F4_41D2_EDAF49EDD50B",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78, this.camera_CAE04B70_DA40_EA82_41CF_D310CC83CA27); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "items": [
       {
        "yaw": -106.83,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.16,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 134,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.86
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 68,
           "width": 61,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.83,
        "yaw": 177.56,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.07
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CCC02FB5_D4E3_0EF7_41AC_C4055EA78567",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03, this.camera_CAFABB7F_DA40_E97E_41E7_F183D40CC5B9); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "items": [
       {
        "yaw": 177.56,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.83,
        "image": {
         "levels": [
          {
           "height": 137,
           "width": 123,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.07
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 39,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.31,
        "yaw": 152.5,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.67
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C2121F37_D4E5_0FF3_41CC_B8F0F6E240F5",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061, this.camera_CAF43B8E_DA40_E99E_4193_5A09F8D3E090); this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "items": [
       {
        "yaw": 152.5,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.31,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 78,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.67
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 33,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 6.2,
        "yaw": -174.13,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.94
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C27686B4_D4E7_7EF5_41D9_803D00047F36",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346, this.camera_CACF0B9C_DA40_E982_4196_B66207AC667D); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "items": [
       {
        "yaw": -174.13,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.2,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 67,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.94
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 28,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.09,
        "yaw": -16.1,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.07
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D551496C_D9F7_E033_41B1_3F34D2D5C5D5",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1NkR6BurG3qpAwKIu-BkykNOcGWf2AuJm/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -16.1,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.09,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 56,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.07
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 28,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.09,
        "yaw": 76.63,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.04
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D7CC98FD_D9F5_A012_41E7_60BF617A9141",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1O_s3avdnhtvhn7236_8Xz_Rz8n4MG4Dn/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": 76.63,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.09,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 56,
           "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.04
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "1_pano10",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 67,
           "url": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 12.09,
        "yaw": 137.97,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.09
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CCAB48AF_D4E5_3294_41DE_82D7A9BA6093",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "items": [
       {
        "yaw": 137.97,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.09,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 134,
           "url": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.09
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 69,
           "url": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 12.58,
        "yaw": -130.17,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.44
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CDF87B8D_D4E3_1697_41D0_FCEC644BCCBB",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "items": [
       {
        "yaw": -130.17,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.58,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 138,
           "url": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.44
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 51,
           "url": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 9.42,
        "yaw": 25.07,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.58
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CEF79125_D4E2_F394_41E8_9C67E68868CB",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34, this.camera_CA39BADE_DA40_EBBE_41D9_480C046F7926); this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "items": [
       {
        "yaw": 25.07,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.42,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 102,
           "url": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.58
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 22.37,
        "yaw": -176.01,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.26
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D6051E79_DA40_EA82_41C3_E813A018AC2F",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/drive/folders/14UOTUZ6XknFDgjMQqdFYpaZijT-p1nZ6?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -176.01,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 22.37,
        "image": {
         "levels": [
          {
           "height": 240,
           "width": 240,
           "url": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.26
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "2__pano11",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "hfov": 90,
   "yaw": -178.06,
   "class": "PanoramaCameraPosition",
   "pitch": 3.32
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 38,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.11,
        "yaw": 84.19,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.15
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CD8052D9_D4DF_16BF_41D4_3440BB2149AA",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78, this.camera_CB35E8E5_DA40_1782_41E0_1570B7D3B40A); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "items": [
       {
        "yaw": 84.19,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.11,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 76,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.15
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 33,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 6.18,
        "yaw": 127.26,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.19
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CD168830_D4DF_318D_41DE_C5C5BC9F874E",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083, this.camera_CB0758FE_DA40_177E_41DF_BA48F60C2E56); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "items": [
       {
        "yaw": 127.26,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.18,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 66,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.19
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 69,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 11.58,
        "yaw": -123.13,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -26.83
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CD1E785B_D4DD_11B3_41E7_863688C43B85",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "items": [
       {
        "yaw": -123.13,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.58,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 138,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -26.83
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 49,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 9.02,
        "yaw": -157.58,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.44
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CFF20412_D523_318D_41D4_42403234D8BB",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061, this.camera_CB21E8CC_DA40_1782_41EA_7A9E01D4B5CF); this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "items": [
       {
        "yaw": -157.58,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.02,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 99,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.44
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 58,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.34,
        "yaw": 127.79,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.71
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CFE84FF2_D525_0E8C_41C0_431D6B261485",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03, this.camera_CB2F98B4_DA40_1782_4199_931A3516658E); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "items": [
       {
        "yaw": 127.79,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.34,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 117,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.71
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 35,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 6.61,
        "yaw": -90.09,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.98
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C80FFDFD_D52D_1277_41B7_3D4633915F64",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "items": [
       {
        "yaw": -90.09,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.61,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 71,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.98
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 28,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.23,
        "yaw": 63.8,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.15
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D446EA71_DA0B_A015_41E2_BA16DF3AA91B",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1OjrO-19pQ-0HIJb9xRJI8F93VrBcX3ke/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": 63.8,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.23,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 56,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.15
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 28,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.19,
        "yaw": 37.84,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.03
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D58DE3AD_DA0B_A00D_41DC_E62CC7AA3049",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1Oho7hgjWNuKESVV6arNrqNHmaXzKTOEq/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": 37.84,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.19,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 56,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.03
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 28,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_8_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.19,
        "yaw": -22.29,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.91
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_CA275709_DA0E_A1F2_41E7_AC2010D89CCD",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1OnLORDpdZRCkGQcqb8UjuBYTRvN-Ahls/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -22.29,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.19,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 56,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.91
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 28,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_9_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.24,
        "yaw": -58.31,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.48
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D4848DF2_DA0E_A017_41E9_BDCCF0D16F04",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1OkXNwbSbPYAdrKnB1MqffoJFSETXqCSJ/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -58.31,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.24,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 56,
           "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.48
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "2__pano12",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 34,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 6.52,
        "yaw": -122.51,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.3
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CFF066D6_D527_1EB5_4189_BBBEF9ABE115",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78, this.camera_CAE4D77C_DA40_1A82_41C8_6C685CDE0173); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "items": [
       {
        "yaw": -122.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.52,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 69,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.3
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 39,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.4,
        "yaw": -78.85,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.86
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CE72018A_D527_729C_41DF_8C5C974F93A3",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083, this.camera_CAF91797_DA40_198E_41EA_336FA252F6ED); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "items": [
       {
        "yaw": -78.85,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.4,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 79,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.86
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 59,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.76,
        "yaw": -131.14,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.84
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C92127C5_D525_1E97_41DC_31A61BE57AF2",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03, this.camera_CAE8576E_DA40_1A9E_41E9_CE4B8EE527A2); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "items": [
       {
        "yaw": -131.14,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.76,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 119,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.84
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 75,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 12.86,
        "yaw": 119.27,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -25.39
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CEE3348B_D525_1293_41E0_2C71EECA926F",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "items": [
       {
        "yaw": 119.27,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.86,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 151,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.39
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 52,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 9.67,
        "yaw": 146.18,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.62
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CEE6F64A_D523_119D_41CC_7C9BDE231C76",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346, this.camera_CAFEB78A_DA40_1986_41D1_0F2CD24D7AC5); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "items": [
       {
        "yaw": 146.18,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.67,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 105,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.62
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 70,
           "width": 34,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 6.36,
        "yaw": 77.1,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.19
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C9B38C84_D523_1295_41E2_42A2FAD50B86",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "items": [
       {
        "yaw": 77.1,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.36,
        "image": {
         "levels": [
          {
           "height": 140,
           "width": 68,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.19
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 20,
           "width": 24,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 4.53,
        "yaw": -53.91,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.49
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D4E2A927_DA1A_A03E_41E5_432E7C387D31",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1P0vhyfo_cy3wjb1vojmlCqi0etXtMWkL/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -53.91,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.53,
        "image": {
         "levels": [
          {
           "height": 40,
           "width": 48,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.49
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 28,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.26,
        "yaw": -0.72,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.47
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D4EDDFA8_DA15_A032_41D8_F79848A1CB6D",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1P5Fr9eR9RQycl2A_NPoBgktBBHS2pj5l/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -0.72,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.26,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 56,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.47
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 28,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_8_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.24,
        "yaw": 54.12,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -6.53
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D4E36ADD_DA16_E00D_4164_9590A4C7A68F",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://drive.google.com/file/d/1OwRkqtRS44_XDLnHNy26m__PyB9VFa7R/view?usp=sharing\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": 54.12,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.24,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 56,
           "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.53
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "2__pano13",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 54,
           "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 9.95,
        "yaw": 107.75,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.86
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C9F9490B_D52F_1393_41DC_888DDDFD2626",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1, this.camera_CA325AEC_DA40_EB82_4189_AADB5FD1C145); this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "items": [
       {
        "yaw": 107.75,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.95,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 109,
           "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.86
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 57,
           "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.58,
        "yaw": 75.23,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.92
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C8598586_D52D_3295_41E7_1F594319E965",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08, this.camera_CA08EB07_DA40_EA8E_41DA_22BFA15B5947); this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "items": [
       {
        "yaw": 75.23,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.58,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 115,
           "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.92
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 57,
           "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.31,
        "yaw": 155.08,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.15
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C8735F6B_D52D_0F93_41C7_4365E3A5614E",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F, this.camera_CA020B15_DA40_EA82_41E0_CEC8DDEA477B); this.mainPlayList.set('selectedIndex', 15)"
       }
      ],
      "items": [
       {
        "yaw": 155.08,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.31,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 115,
           "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.15
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 48,
           "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.96,
        "yaw": 43.72,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.12
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CB0775BF_D523_12F4_41E5_A9124B5F3205",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 17)"
       }
      ],
      "items": [
       {
        "yaw": 43.72,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.96,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 97,
           "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.12
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 48,
           "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.83,
        "yaw": -134.51,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.99
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_C8C590B6_D525_12F5_41D2_D83A25920844",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500, this.camera_CA0C6AF9_DA40_EB82_41BD_8E39088DDB9B); this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "items": [
       {
        "yaw": -134.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.83,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 96,
           "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.99
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "2__pano14",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 62,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.84,
        "yaw": 89.28,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -23.11
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CA31ADEF_D527_3293_41CE_EE31D47F3C10",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F, this.camera_CA0FF70A_DA40_1A86_41D8_BBA038625477); this.mainPlayList.set('selectedIndex', 15)"
       }
      ],
      "items": [
       {
        "yaw": 89.28,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.84,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 125,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.11
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 48,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 9,
        "yaw": -143.82,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.46
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CA280DA0_D525_728D_41E3_C0D9A137CCEA",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769, this.camera_CA0BA718_DA40_1A82_41CB_821E11EAB800); this.mainPlayList.set('selectedIndex', 17)"
       }
      ],
      "items": [
       {
        "yaw": -143.82,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 97,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.46
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 66,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 11.55,
        "yaw": -87,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -23.12
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_CAB5D9DD_D523_12B7_41E0_B8E0B9F12479",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08, this.camera_CA3676ED_DA40_1B82_41D1_6667622AE604); this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "items": [
       {
        "yaw": -87,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.55,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 133,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.12
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 64,
           "width": 63,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 11.23,
        "yaw": 162.84,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.59
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F580E90A_D523_139D_41E2_A0D3F1E1E9CA",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34, this.camera_CA3596FB_DA40_1B86_41E1_C621986D08C6); this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "items": [
       {
        "yaw": 162.84,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.23,
        "image": {
         "levels": [
          {
           "height": 128,
           "width": 127,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.59
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 18,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.24,
        "yaw": -1.64,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.66
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_F9003975_D5E7_3C5A_41E8_B0C4116536F4",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"http://wa.me/6289602214807\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -1.64,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.24,
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 59,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.66
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 29,
           "width": 31,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.66,
        "yaw": -12.48,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.41
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_FB2816CC_D5E3_144A_41D3_5419BDA37C0D",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_F81C18AA_D5E3_1CCE_41D0_941DB7DAF227, null, false)"
       }
      ],
      "items": [
       {
        "yaw": -12.48,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.66,
        "image": {
         "levels": [
          {
           "height": 59,
           "width": 62,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.41
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 31,
           "width": 33,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 6.22,
        "yaw": 5.89,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.33
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FAA8E8AF_D5ED_1CC6_41DD_2792685E9786",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_F8B74232_D5ED_EFDE_41BB_3BDE4937F3BE, {'rollOverIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'paddingBottom':5,'pressedIconLineWidth':5,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'paddingTop':5,'pressedIconColor':'#888888','paddingLeft':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'pressedIconWidth':20,'pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconLineWidth':5}, this.ImageResource_F9947067_D5E5_2C46_41D5_595C38EA9A4A, null, null, null, null, false)"
       }
      ],
      "items": [
       {
        "yaw": 5.89,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.22,
        "image": {
         "levels": [
          {
           "height": 62,
           "width": 67,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.33
       }
      ]
     },
     {
      "rotationZ": 0,
      "hfov": 6.22,
      "yaw": 5.89,
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "popupMaxWidth": "95%",
      "image": {
       "levels": [
        {
         "height": 576,
         "width": 1024,
         "url": "media/popup_F8B74232_D5ED_EFDE_41BB_3BDE4937F3BE_0_1.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "popupMaxHeight": "95%",
      "id": "popup_F8B74232_D5ED_EFDE_41BB_3BDE4937F3BE",
      "rotationX": 0,
      "showDuration": 500,
      "hideDuration": 500,
      "rotationY": 0,
      "pitch": -11.33
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 23,
           "width": 27,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_7_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.14,
        "yaw": 129.27,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.57
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_D55464A7_DA40_1F8E_41CE_F617D60C4A48",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "items": [
       {
        "yaw": 129.27,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.14,
        "image": {
         "levels": [
          {
           "height": 47,
           "width": 54,
           "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.57
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "2__pano15",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 64,
           "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 11.45,
        "yaw": -108.33,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.06
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F5B0E082_D53D_128D_41CE_ED521E22DB67",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1, this.camera_CAF297A6_DA40_198E_41A2_3CACCAB52BB3); this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "items": [
       {
        "yaw": -108.33,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.45,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 128,
           "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.06
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 50,
           "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 9.36,
        "yaw": -131.65,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.94
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F7264499_D53D_12BF_41D5_6E6C94328F8E",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08, this.camera_CACAE7B4_DA40_1982_41DC_06C9078E7CBC); this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "items": [
       {
        "yaw": -131.65,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.36,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 101,
           "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.94
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 39,
           "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.37,
        "yaw": -166.17,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.84
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F73C5B60_D53E_F78D_41C7_6EFE77DEDC49",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769, this.camera_CADC87D4_DA40_1982_41D2_4A9148C75AF2); this.mainPlayList.set('selectedIndex', 17)"
       }
      ],
      "items": [
       {
        "yaw": -166.17,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.37,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 79,
           "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.84
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 70,
           "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 12.4,
        "yaw": 165.74,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F791F42D_D53D_3197_41E4_C5113527E557",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34, this.camera_CAC487C3_DA40_1986_41C8_688CC52B74E3); this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "items": [
       {
        "yaw": 165.74,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.4,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 140,
           "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.22
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 33,
           "width": 30,
           "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.66,
        "yaw": 90.09,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.16
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_D4A67C14_DA40_EE82_41E0_E8E09624E084",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "items": [
       {
        "yaw": 90.09,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.66,
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 60,
           "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.16
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "2__pano16",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 64,
           "url": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 11.37,
        "yaw": 134.33,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.8
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F7F29182_D53D_128D_41DD_BA8A145994BA",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1, this.camera_CA9B9848_DA40_1682_41E7_31100DF61CE3); this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "items": [
       {
        "yaw": 134.33,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.37,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 128,
           "url": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.8
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 46,
           "url": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.5,
        "yaw": 150.29,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.68
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F67B32FB_D523_1673_41E4_C504E5BD2D98",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F, this.camera_CB613864_DA40_1682_41C3_C5D51CBE7D11); this.mainPlayList.set('selectedIndex', 15)"
       }
      ],
      "items": [
       {
        "yaw": 150.29,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.5,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 92,
           "url": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.68
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 66,
           "url": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 12.06,
        "yaw": -112.59,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.68
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F76A0534_D523_33F5_41D4_1BC44CEEC184",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769, this.camera_CB74E873_DA40_1686_41E2_6F45D6A7BBFF); this.mainPlayList.set('selectedIndex', 17)"
       }
      ],
      "items": [
       {
        "yaw": -112.59,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.06,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 133,
           "url": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.68
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 48,
           "url": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.87,
        "yaw": -169.45,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.62
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F7FA33AB_D525_7693_41E1_504CDBC397EC",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34, this.camera_CB6C1856_DA40_168E_41E4_A755972945E3); this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "items": [
       {
        "yaw": -169.45,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.87,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 97,
           "url": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.62
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "2__pano17",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 63,
           "url": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 11.08,
        "yaw": 126.93,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.88
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F7DEE9E8_D525_129D_41B3_07D1B714AB8B",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08, this.camera_CBEC992A_DA40_1686_41D9_FC680049E23B); this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "items": [
       {
        "yaw": 126.93,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.08,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 127,
           "url": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.88
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 38,
           "url": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.06,
        "yaw": -165.77,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.25
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F65E730F_D527_1793_41E2_B707DAFA7253",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F, this.camera_CBF34957_DA40_168E_41E5_51607A77A29A); this.mainPlayList.set('selectedIndex', 15)"
       }
      ],
      "items": [
       {
        "yaw": -165.77,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.06,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 76,
           "url": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.25
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 45,
           "url": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.35,
        "yaw": 166.67,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.39
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F68FC0E3_D527_3292_41A0_3F901672598A",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1, this.camera_CB1B3912_DA40_1686_41D4_DC3DEB09CD4B); this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "items": [
       {
        "yaw": 166.67,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.35,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 91,
           "url": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.39
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 55,
           "url": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.18,
        "yaw": -54.54,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.14
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F6E0E3CC_D525_1695_41E6_25A46F6FBE80",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90, this.camera_CBE13943_DA40_1686_41EA_8966AB4C7FD2); this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "items": [
       {
        "yaw": -54.54,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.18,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 111,
           "url": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.14
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "2__pano18",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 55,
           "url": "media/panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.19,
        "yaw": -69.9,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.03
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F1CCE3AF_D523_1693_41E9_EAC51F1A503F",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769, this.camera_C84E0A20_DA40_EA81_41B4_946376B791DE); this.mainPlayList.set('selectedIndex', 17)"
       }
      ],
      "items": [
       {
        "yaw": -69.9,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.19,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 111,
           "url": "media/panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.03
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 44,
           "url": "media/panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.2,
        "yaw": 49.34,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.73
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F248F6AE_D52D_FEEF_41E5_3C42232F9AC2",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "items": [
       {
        "yaw": 49.34,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.2,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 88,
           "url": "media/panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.73
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 64,
           "url": "media/panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 11.52,
        "yaw": 154.33,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.51
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F355C375_D52D_3677_41D3_FF39C58A2BD7",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B, this.camera_C87C1A12_DA40_EA81_41E7_872A77AED1EA); this.mainPlayList.set('selectedIndex', 19)"
       }
      ],
      "items": [
       {
        "yaw": 154.33,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.52,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 128,
           "url": "media/panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.51
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "2__pano19",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 44,
           "url": "media/panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.26,
        "yaw": 0.2,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.97
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F367236D_D52F_7797_41C4_6F9145BC1FF1",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC, this.camera_CA3FAAD0_DA40_EB82_41D8_C018C0902A2C); this.mainPlayList.set('selectedIndex', 20)"
       }
      ],
      "items": [
       {
        "yaw": 0.2,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.26,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 88,
           "url": "media/panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.97
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 60,
           "url": "media/panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.44,
        "yaw": -171.27,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.39
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F0DB8909_D52F_139C_41D7_96C17746A4FF",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90, this.camera_CA226AC2_DA40_EB86_41A8_0A01531A098A); this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "items": [
       {
        "yaw": -171.27,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.44,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 120,
           "url": "media/panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.39
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "2__pano20",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 60,
           "url": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 11.03,
        "yaw": -43.23,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.04
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F0A20C29_D52D_119C_41E4_1BAF107E884A",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728, this.camera_CAEC4B52_DA40_EA86_41DD_5EA7884C65D1); this.mainPlayList.set('selectedIndex', 21)"
       }
      ],
      "items": [
       {
        "yaw": -43.23,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.03,
        "image": {
         "levels": [
          {
           "height": 101,
           "width": 120,
           "url": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.04
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 57,
           "width": 48,
           "url": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.92,
        "yaw": 38.47,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.68
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F2A24D36_D52D_33F5_41E6_76B8D15E9CD5",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819, this.camera_CAE6DB61_DA40_EA82_41E2_46FAD6D59A55); this.mainPlayList.set('selectedIndex', 22)"
       }
      ],
      "items": [
       {
        "yaw": 38.47,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.92,
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 97,
           "url": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.68
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 58,
           "url": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 10.58,
        "yaw": -179.87,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.69
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FD3DB23F_D523_11F3_41E3_8CB12C5A01F3",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B, this.camera_CA12AB43_DA40_EA86_41D0_1187762C6242); this.mainPlayList.set('selectedIndex', 19)"
       }
      ],
      "items": [
       {
        "yaw": -179.87,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.58,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 117,
           "url": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.69
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 25,
           "width": 31,
           "url": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.83,
        "yaw": -0.83,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 5.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_D6C06589_D8A2_E492_41C3_DB553187A0D3",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.openLink(\"https://www.menti.com/nk238uuhac\", \"_blank\")"
       }
      ],
      "items": [
       {
        "yaw": -0.83,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.83,
        "image": {
         "levels": [
          {
           "height": 51,
           "width": 62,
           "url": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.22
       }
      ]
     },
     {
      "bleachingDistance": 0.4,
      "id": "overlay_D64D5818_D89E_EBB2_41E9_15F09BC9146D",
      "class": "LensFlarePanoramaOverlay",
      "yaw": 116.83,
      "bleaching": 0.7,
      "pitch": 62.34
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "3_pano21",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 67,
           "width": 48,
           "url": "media/panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.92,
        "yaw": 32.74,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.69
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F21EE606_D523_1195_41E5_6A4C08D07511",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC, this.camera_CA15B751_DA40_1A82_41E6_D1BAA5027961); this.mainPlayList.set('selectedIndex', 20)"
       }
      ],
      "items": [
       {
        "yaw": 32.74,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.92,
        "image": {
         "levels": [
          {
           "height": 135,
           "width": 97,
           "url": "media/panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.69
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 50,
           "url": "media/panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 9.14,
        "yaw": -48.29,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.21
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F28BAA4A_D525_719C_41E3_49DC2A27031B",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59, this.camera_CAEE3760_DA40_1A82_41E1_18C89A11A0F2); this.mainPlayList.set('selectedIndex', 23)"
       }
      ],
      "items": [
       {
        "yaw": -48.29,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.14,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 100,
           "url": "media/panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.21
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "3_pano22",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 45,
           "url": "media/panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.36,
        "yaw": -40.46,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.62
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F2D07FE9_D525_0E9F_41D9_2776DDD8B323",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC, this.camera_C8421A31_DA40_EA83_41DD_7485F0EBA9AE); this.mainPlayList.set('selectedIndex', 20)"
       }
      ],
      "items": [
       {
        "yaw": -40.46,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.36,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 91,
           "url": "media/panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.62
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 40,
           "url": "media/panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 7.36,
        "yaw": 34.32,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.8
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_F2A1582E_D527_1195_41E2_DA32F78E8FF7",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59, this.camera_C8543A3F_DA40_EAFF_41EA_67403E91C30A); this.mainPlayList.set('selectedIndex', 23)"
       }
      ],
      "items": [
       {
        "yaw": 34.32,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.36,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 80,
           "url": "media/panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.8
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "3_pano23",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 65,
           "width": 47,
           "url": "media/panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.64,
        "yaw": 35.42,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.49
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FD7E057C_D527_1275_41E0_6593BDDAC772",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728, this.camera_CBD88989_DA40_E982_41E2_9D813CADACD8); this.mainPlayList.set('selectedIndex', 21)"
       }
      ],
      "items": [
       {
        "yaw": 35.42,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.64,
        "image": {
         "levels": [
          {
           "height": 131,
           "width": 95,
           "url": "media/panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.49
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 66,
           "width": 44,
           "url": "media/panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 8.13,
        "yaw": -44.87,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.79
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_FF5814E0_D527_128D_41E7_0B84C0685B37",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819, this.camera_CBC4B970_DA40_1681_41E3_B34256357A53); this.mainPlayList.set('selectedIndex', 22)"
       }
      ],
      "items": [
       {
        "yaw": -44.87,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.13,
        "image": {
         "levels": [
          {
           "height": 132,
           "width": 88,
           "url": "media/panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.79
       }
      ]
     },
     {
      "bleachingDistance": 0.4,
      "id": "overlay_D50EC3E6_D89E_3C9E_41E3_373331E25496",
      "class": "LensFlarePanoramaOverlay",
      "yaw": -68.12,
      "bleaching": 0.7,
      "pitch": 62.75
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 1920,
       "width": 3840,
       "url": "media/panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "3_pano24",
  "hfov": 360,
  "vfov": 180
 },
 {
  "id": "panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD597C83_D4DF_1293_41A7_759F3926FC2C",
    "camera": "this.panorama_DD597C83_D4DF_1293_41A7_759F3926FC2C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F",
    "camera": "this.panorama_DD9AEB7A_D4DF_167D_41E2_ECE912C61C7F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988",
    "camera": "this.panorama_DD9CC496_D4DF_72B4_41DB_B932491C3988_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532",
    "camera": "this.panorama_DD9C0DC4_D4DF_7295_41DC_C4EEE42B1532_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF",
    "camera": "this.panorama_DD9CC766_D4DF_1F95_41CD_29D087AB43CF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E",
    "camera": "this.panorama_DD9CD18F_D4DF_3294_41E8_B96F73877A8E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D",
    "camera": "this.panorama_DD9CBB95_D4DF_36B4_41E6_705BE6F32C0D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03",
    "camera": "this.panorama_DD9CD75D_D4DF_1FB7_41DD_B3BE50615A03_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78",
    "camera": "this.panorama_DD9C5304_D4DF_F795_41A6_B40716B92E78_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083",
    "camera": "this.panorama_DD9C1BAD_D4DF_F697_41DA_0D3A6E744083_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500",
    "camera": "this.panorama_DD9C453F_D4DF_13F3_41CD_DC3DAEA38500_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346",
    "camera": "this.panorama_DD9C5E2B_D4DF_1193_41AD_C43985557346_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061",
    "camera": "this.panorama_DD9C576A_D4DF_3F9D_41DA_E1CCBC9F1061_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34",
    "camera": "this.panorama_DD9C7076_D4DF_1275_41E6_8D07C386AA34_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1",
    "camera": "this.panorama_DD9DB951_D4DF_138F_41E0_A752FF4B4FA1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F",
    "camera": "this.panorama_DD9C025E_D4DF_71B5_4198_1E8F68EE942F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08",
    "camera": "this.panorama_DD9C3C53_D4DF_71B3_4169_0AECCADBCD08_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769",
    "camera": "this.panorama_DD9C0550_D4DF_138D_41E9_D7B4C83F3769_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90",
    "camera": "this.panorama_DD9C2E2B_D4DF_1193_41D7_B738A6C73E90_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B",
    "camera": "this.panorama_DD9C2759_D4DF_3FBF_41C6_18A570D8A40B_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC",
    "camera": "this.panorama_DD9DD0D9_D4DF_12BF_41DA_441059ECE4BC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728",
    "camera": "this.panorama_DD9C09C5_D4DF_1297_41D7_60190EA62728_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819",
    "camera": "this.panorama_DD9C2324_D4DE_F795_41D6_E57B078E9819_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 0)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59",
    "camera": "this.panorama_DD9C0D0B_D4DE_F393_41C4_4909D6FF6C59_camera"
   }
  ]
 },
 {
  "bodyPaddingRight": 5,
  "backgroundColor": [],
  "verticalAlign": "middle",
  "layout": "vertical",
  "paddingRight": 0,
  "modal": true,
  "bodyBorderSize": 0,
  "titlePaddingRight": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "veilColorDirection": "horizontal",
  "gap": 10,
  "title": "Selamat Datang!",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "minWidth": 20,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "titleFontColor": "#000000",
  "bodyPaddingBottom": 5,
  "shadow": true,
  "horizontalAlign": "center",
  "shadowOpacity": 0.5,
  "titlePaddingBottom": 5,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonBackgroundColorRatios": [],
  "backgroundColorRatios": [],
  "headerBorderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "titlePaddingLeft": 5,
  "shadowColor": "#000000",
  "paddingTop": 0,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "shadowSpread": 1,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerBorderColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "titleFontStyle": "normal",
  "bodyBackgroundOpacity": 1,
  "overflow": "scroll",
  "bodyBorderColor": "#000000",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerPaddingBottom": 10,
  "bodyPaddingLeft": 5,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "backgroundColorDirection": "vertical",
  "bodyPaddingTop": 5,
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "scrollBarColor": "#000000",
    "scrollBarOpacity": 0.5,
    "paddingRight": 10,
    "height": "100%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "minHeight": 0,
    "minWidth": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "paddingLeft": 10,
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:22px;font-family:'Trebuchet MS', Helvetica, sans-serif;\">Terimakasih sudah berkenan mengunjungi kami. Kami meminta dengan hormat kiranya Anda bisa mengisi buku pengunjung terlebih dahulu. Terimakasih, have a nice day! </SPAN></SPAN></DIV></div>",
    "id": "htmlText_uidC8543674_DA40_1A82_41DC_79729408AB51",
    "paddingTop": 10,
    "class": "HTMLText",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver"
   }
  ],
  "scrollBarColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titlePaddingTop": 5,
  "width": 500,
  "shadowHorizontalLength": 3,
  "height": 300,
  "minHeight": 20,
  "borderRadius": 5,
  "closeButtonIconColor": "#000000",
  "borderSize": 0,
  "closeButtonIconWidth": 12,
  "contentOpaque": false,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titleFontFamily": "Trebuchet MS",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titleFontSize": 28,
  "headerBackgroundOpacity": 1,
  "paddingLeft": 0,
  "shadowVerticalLength": 0,
  "footerHeight": 5,
  "id": "window_E5A21F69_D567_744A_4188_29BA5E7C504D",
  "headerPaddingTop": 10,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "headerBackgroundColorDirection": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleFontWeight": "normal",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerPaddingLeft": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "shadowBlurRadius": 6,
  "titleTextDecoration": "none",
  "backgroundOpacity": 1,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBorderRadius": 11,
  "headerPaddingRight": 10,
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12
 },
 {
  "bodyPaddingRight": 5,
  "backgroundColor": [],
  "verticalAlign": "middle",
  "layout": "vertical",
  "paddingRight": 0,
  "modal": true,
  "bodyBorderSize": 0,
  "titlePaddingRight": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "veilColorDirection": "horizontal",
  "gap": 10,
  "title": "Saling...",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "minWidth": 20,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "titleFontColor": "#000000",
  "bodyPaddingBottom": 5,
  "shadow": true,
  "horizontalAlign": "center",
  "shadowOpacity": 0.5,
  "titlePaddingBottom": 5,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonBackgroundColorRatios": [],
  "backgroundColorRatios": [],
  "headerBorderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "titlePaddingLeft": 5,
  "shadowColor": "#000000",
  "paddingTop": 0,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "shadowSpread": 1,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerBorderColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "titleFontStyle": "normal",
  "bodyBackgroundOpacity": 1,
  "overflow": "scroll",
  "bodyBorderColor": "#000000",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerPaddingBottom": 10,
  "bodyPaddingLeft": 5,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "backgroundColorDirection": "vertical",
  "bodyPaddingTop": 5,
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "scrollBarColor": "#000000",
    "scrollBarOpacity": 0.5,
    "paddingRight": 10,
    "height": "100%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "minHeight": 0,
    "minWidth": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "paddingLeft": 10,
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:24px;font-family:'Trebuchet MS', Helvetica, sans-serif;\">Terdapat kelompok umur manusia yang saling jabat tangan dan melingkar untuk mengungkapkan maksud isi hati dan pola keteraturan dari prinsip dasar kehidupan normal</SPAN></SPAN></DIV></div>",
    "id": "htmlText_uidC855E676_DA40_1A8E_41C2_EC113BC2D48F",
    "paddingTop": 10,
    "class": "HTMLText",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver"
   }
  ],
  "scrollBarColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titlePaddingTop": 5,
  "width": 600,
  "shadowHorizontalLength": 3,
  "height": 400,
  "minHeight": 20,
  "borderRadius": 5,
  "closeButtonIconColor": "#000000",
  "borderSize": 0,
  "closeButtonIconWidth": 12,
  "contentOpaque": false,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titleFontFamily": "Trebuchet MS",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titleFontSize": 28,
  "headerBackgroundOpacity": 1,
  "paddingLeft": 0,
  "shadowVerticalLength": 0,
  "footerHeight": 5,
  "id": "window_FB50BAB3_D5EE_FCDE_41B9_086DE60B58C3",
  "headerPaddingTop": 10,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "headerBackgroundColorDirection": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleFontWeight": "normal",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerPaddingLeft": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "shadowBlurRadius": 6,
  "titleTextDecoration": "none",
  "backgroundOpacity": 1,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBorderRadius": 11,
  "headerPaddingRight": 10,
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12
 },
 "this.popup_E7DFCA41_D527_1FBA_41E9_9CEB49713BA9",
 {
  "levels": [
   {
    "height": 1952,
    "width": 3280,
    "url": "media/popup_E7DFCA41_D527_1FBA_41E9_9CEB49713BA9_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1218,
    "width": 2048,
    "url": "media/popup_E7DFCA41_D527_1FBA_41E9_9CEB49713BA9_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 609,
    "width": 1024,
    "url": "media/popup_E7DFCA41_D527_1FBA_41E9_9CEB49713BA9_0_2.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 304,
    "width": 512,
    "url": "media/popup_E7DFCA41_D527_1FBA_41E9_9CEB49713BA9_0_3.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_C81060EA_D866_DC96_41E6_67A41116E678",
  "class": "ImageResource"
 },
 "this.popup_FBD8622A_D5E3_6FCF_41B5_F5FABCE5C6CE",
 {
  "levels": [
   {
    "height": 2484,
    "width": 3510,
    "url": "media/popup_FBD8622A_D5E3_6FCF_41B5_F5FABCE5C6CE_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1449,
    "width": 2047,
    "url": "media/popup_FBD8622A_D5E3_6FCF_41B5_F5FABCE5C6CE_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 724,
    "width": 1023,
    "url": "media/popup_FBD8622A_D5E3_6FCF_41B5_F5FABCE5C6CE_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 362,
    "width": 511,
    "url": "media/popup_FBD8622A_D5E3_6FCF_41B5_F5FABCE5C6CE_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_E5E75F80_D5E3_34BA_41D0_B3E8A4ABAE7A",
  "class": "ImageResource"
 },
 "this.popup_E5B6E171_D565_2C5A_41DC_62745C85C741",
 {
  "levels": [
   {
    "height": 1952,
    "width": 3280,
    "url": "media/popup_E5B6E171_D565_2C5A_41DC_62745C85C741_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1218,
    "width": 2048,
    "url": "media/popup_E5B6E171_D565_2C5A_41DC_62745C85C741_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 609,
    "width": 1024,
    "url": "media/popup_E5B6E171_D565_2C5A_41DC_62745C85C741_0_2.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 304,
    "width": 512,
    "url": "media/popup_E5B6E171_D565_2C5A_41DC_62745C85C741_0_3.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_C81EC0F2_D866_DC76_41B2_0AF736998794",
  "class": "ImageResource"
 },
 {
  "bodyPaddingRight": 5,
  "backgroundColor": [],
  "verticalAlign": "middle",
  "layout": "vertical",
  "paddingRight": 0,
  "modal": true,
  "bodyBorderSize": 0,
  "titlePaddingRight": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPaddingTop": 0,
  "veilColorDirection": "horizontal",
  "gap": 10,
  "title": "Tertarik Membeli Merchandise Archday?",
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "minWidth": 20,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "titleFontColor": "#000000",
  "closeButtonPaddingRight": 0,
  "bodyPaddingBottom": 5,
  "shadow": true,
  "horizontalAlign": "center",
  "shadowOpacity": 0.5,
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonPaddingBottom": 0,
  "titlePaddingBottom": 5,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonBackgroundColorRatios": [],
  "backgroundColorRatios": [],
  "headerBorderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "titlePaddingLeft": 5,
  "shadowColor": "#000000",
  "paddingTop": 0,
  "closeButtonBackgroundColor": [],
  "class": "Window",
  "shadowSpread": 1,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerBorderColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "closeButtonBorderSize": 0,
  "titleFontStyle": "normal",
  "bodyBackgroundOpacity": 1,
  "overflow": "scroll",
  "bodyBorderColor": "#000000",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerPaddingBottom": 10,
  "bodyPaddingLeft": 5,
  "scrollBarVisible": "rollOver",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "veilOpacity": 0.4,
  "backgroundColorDirection": "vertical",
  "bodyPaddingTop": 5,
  "closeButtonBorderColor": "#000000",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "scrollBarColor": "#000000",
    "scrollBarOpacity": 0.5,
    "paddingRight": 10,
    "height": "100%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "minHeight": 0,
    "minWidth": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "paddingLeft": 10,
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:24px;\">Silakan hubungi kontak Whatsapp yang tertera diatas meja. Terimakasih!</SPAN></SPAN></DIV></div>",
    "id": "htmlText_uidC829D681_DA40_1B82_41B0_4496BDE92D91",
    "paddingTop": 10,
    "class": "HTMLText",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver"
   }
  ],
  "scrollBarColor": "#000000",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titlePaddingTop": 5,
  "width": 600,
  "shadowHorizontalLength": 3,
  "height": 300,
  "closeButtonPaddingLeft": 0,
  "minHeight": 20,
  "borderRadius": 5,
  "closeButtonIconColor": "#000000",
  "borderSize": 0,
  "closeButtonIconWidth": 12,
  "contentOpaque": false,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonIconLineWidth": 2,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titleFontFamily": "Trebuchet MS",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titleFontSize": 28,
  "headerBackgroundOpacity": 1,
  "paddingLeft": 0,
  "shadowVerticalLength": 0,
  "footerHeight": 5,
  "id": "window_F81C18AA_D5E3_1CCE_41D0_941DB7DAF227",
  "closeButtonBackgroundOpacity": 1,
  "headerPaddingTop": 10,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "headerBackgroundColorDirection": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleFontWeight": "bold",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "headerPaddingLeft": 10,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "shadowBlurRadius": 6,
  "titleTextDecoration": "none",
  "backgroundOpacity": 1,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBorderRadius": 11,
  "headerPaddingRight": 10,
  "headerVerticalAlign": "middle",
  "closeButtonIconHeight": 12
 },
 "this.popup_F8B74232_D5ED_EFDE_41BB_3BDE4937F3BE",
 {
  "levels": [
   {
    "height": 1080,
    "width": 1920,
    "url": "media/popup_F8B74232_D5ED_EFDE_41BB_3BDE4937F3BE_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 576,
    "width": 1024,
    "url": "media/popup_F8B74232_D5ED_EFDE_41BB_3BDE4937F3BE_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 288,
    "width": 512,
    "url": "media/popup_F8B74232_D5ED_EFDE_41BB_3BDE4937F3BE_0_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_F9947067_D5E5_2C46_41D5_595C38EA9A4A",
  "class": "ImageResource"
 },
 {
  "id": "camera_CA3676ED_DA40_1B82_41D1_6667622AE604",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -45.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA3596FB_DA40_1B86_41E1_C621986D08C6",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -72.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA0FF70A_DA40_1A86_41D8_BBA038625477",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 71.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA0BA718_DA40_1A82_41CB_821E11EAB800",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -13.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA05F727_DA40_1A8E_41E5_71C10692B30A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -67.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA1FE735_DA40_1A82_41D8_643312F63F32",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 158.17,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA187743_DA40_1A86_41DD_EAAAF181B087",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 62.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA15B751_DA40_1A82_41E6_D1BAA5027961",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 136.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAEE3760_DA40_1A82_41E1_18C89A11A0F2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -144.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAE8576E_DA40_1A9E_41E9_CE4B8EE527A2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 141.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAE4D77C_DA40_1A82_41C8_6C685CDE0173",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -19.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAFEB78A_DA40_1986_41D1_0F2CD24D7AC5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 22.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAF91797_DA40_198E_41EA_336FA252F6ED",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -27.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAF297A6_DA40_198E_41A2_3CACCAB52BB3",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -90.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CACAE7B4_DA40_1982_41DC_06C9078E7CBC",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -29.71,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAC487C3_DA40_1986_41C8_688CC52B74E3",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -24.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CADC87D4_DA40_1982_41D2_4A9148C75AF2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 14.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAD737E4_DA40_1982_41E3_9903458B46CA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -115.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAAE87F2_DA40_1986_41E7_FDB7CCDBFF9D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 45.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAA4E800_DA40_1682_41DE_03E4802E801C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -90.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CABCC80E_DA40_169E_41C4_1FEE085DA2D2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -33.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAB2781B_DA40_1686_41E7_BB9AEC38C053",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 57.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA8AC82A_DA40_1686_41E9_DDFAD1948F52",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -95.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA839839_DA40_1682_41E6_02D5DCBB457F",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 73.17,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA9B9848_DA40_1682_41E7_31100DF61CE3",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB6C1856_DA40_168E_41E4_A755972945E3",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -104.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB613864_DA40_1682_41C3_C5D51CBE7D11",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 48.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB74E873_DA40_1686_41E2_6F45D6A7BBFF",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -53.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB49D880_DA40_1782_41D3_E1A728120844",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -64.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB5D98A1_DA40_1782_41D4_0D43D088D05A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 28.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB2F98B4_DA40_1782_4199_931A3516658E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -147.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB21E8CC_DA40_1782_41EA_7A9E01D4B5CF",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -33.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB35E8E5_DA40_1782_41E0_1570B7D3B40A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 16.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB0758FE_DA40_177E_41DF_BA48F60C2E56",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 5.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB1B3912_DA40_1686_41D4_DC3DEB09CD4B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 36.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CBEC992A_DA40_1686_41D9_FC680049E23B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 67.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CBE13943_DA40_1686_41EA_8966AB4C7FD2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 110.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CBF34957_DA40_168E_41E5_51607A77A29A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 13.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CBC4B970_DA40_1681_41E3_B34256357A53",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -145.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CBD88989_DA40_E982_41E2_9D813CADACD8",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 131.71,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CBAA89A1_DA40_E983_41DA_6DE386334DAE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -52.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CBBEC9BB_DA40_E987_41C3_0E5C84905B19",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -13.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CBB0F9D5_DA40_E983_41D6_3D27C2335217",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 48.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB84B9E6_DA40_E981_41D5_66355E4EFE0E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 177.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CB96E9F5_DA40_E983_41CC_17576795D02E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -2.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_C86B9A02_DA40_EA81_41A8_8C0DB97FE344",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -2.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_C87C1A12_DA40_EA81_41E7_872A77AED1EA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 8.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_C84E0A20_DA40_EA81_41B4_946376B791DE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 125.46,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_C8421A31_DA40_EA83_41DD_7485F0EBA9AE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -141.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_C8543A3F_DA40_EAFF_41EA_67403E91C30A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 135.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA542A89_DA40_EB83_41E7_0821FC340670",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -4,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA503A97_DA40_EB8E_41E0_EB959A38662F",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -113.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA2C4AA5_DA40_EB82_41E6_9D7671FA17B4",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 11.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA29DAB4_DA40_EB82_41E9_E37B92F4F391",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 178.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA226AC2_DA40_EB86_41A8_0A01531A098A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -25.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA3FAAD0_DA40_EB82_41D8_C018C0902A2C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA39BADE_DA40_EBBE_41D9_480C046F7926",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 45.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA325AEC_DA40_EB82_4189_AADB5FD1C145",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -17.16,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA0C6AF9_DA40_EB82_41BD_8E39088DDB9B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "hfov": 90,
   "yaw": -154.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA08EB07_DA40_EA8E_41DA_22BFA15B5947",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 10.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA020B15_DA40_EA82_41E0_CEC8DDEA477B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -14.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA1F7B24_DA40_EA82_41DC_7DA59377F4F2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 175.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA189B33_DA40_EA86_41D9_213F4AA7E98A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 14.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CA12AB43_DA40_EA86_41D0_1187762C6242",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -179.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAEC4B52_DA40_EA86_41DD_5EA7884C65D1",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -147.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAE6DB61_DA40_EA82_41E2_46FAD6D59A55",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 139.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAE04B70_DA40_EA82_41CF_D310CC83CA27",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -83.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAFABB7F_DA40_E97E_41E7_F183D40CC5B9",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CAF43B8E_DA40_E99E_4193_5A09F8D3E090",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 101.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_CACF0B9C_DA40_E982_4196_B66207AC667D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -52.74,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "autoplay": true,
  "id": "audio_CA9C5114_D9A5_DDB3_41E8_3F18D07CF996",
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_CA9C5114_D9A5_DDB3_41E8_3F18D07CF996.ogg",
   "mp3Url": "media/audio_CA9C5114_D9A5_DDB3_41E8_3F18D07CF996.mp3"
  }
 },
 {
  "autoplay": true,
  "id": "audio_CAA18142_D9A5_DD96_4198_A5886669F5D4",
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_CAA18142_D9A5_DD96_4198_A5886669F5D4.ogg",
   "mp3Url": "media/audio_CAA18142_D9A5_DD96_4198_A5886669F5D4.mp3"
  }
 },
 {
  "autoplay": true,
  "id": "audio_CAA1C148_D9A5_DD92_41EA_704C3491B8F2",
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_CAA1C148_D9A5_DD92_41EA_704C3491B8F2.ogg",
   "mp3Url": "media/audio_CAA1C148_D9A5_DD92_41EA_704C3491B8F2.mp3"
  }
 }
], "children": [
 {
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "toolTipBorderSize": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "minWidth": 100,
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "toolTipFontStyle": "normal",
  "shadow": false,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "class": "ViewerArea",
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "width": "100%",
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "minHeight": 50,
  "toolTipTextShadowOpacity": 0,
  "height": "100%",
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 10,
  "left": 0,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1
 },
 {
  "paddingRight": 0,
  "maxHeight": 56,
  "mode": "push",
  "width": 56,
  "height": 56,
  "iconURL": "skin/IconButton_F9786E62_D52F_147E_4181_C63224778A3E.png",
  "transparencyActive": false,
  "borderRadius": 0,
  "minHeight": 1,
  "borderSize": 0,
  "minWidth": 1,
  "shadow": false,
  "horizontalAlign": "center",
  "cursor": "hand",
  "paddingLeft": 0,
  "paddingBottom": 0,
  "id": "IconButton_F9786E62_D52F_147E_4181_C63224778A3E",
  "bottom": "1.64%",
  "maxWidth": 56,
  "paddingTop": 0,
  "class": "IconButton",
  "backgroundOpacity": 0,
  "right": "0.82%",
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "maxHeight": 128,
  "mode": "toggle",
  "toolTipPaddingRight": 6,
  "width": 49,
  "iconURL": "skin/IconButton_FE83101A_D52D_EBCE_41E1_D12715BD4BB1.png",
  "height": 45.05,
  "toolTipTextShadowOpacity": 0,
  "transparencyActive": true,
  "toolTipPaddingTop": 4,
  "borderRadius": 0,
  "minHeight": 1,
  "toolTipFontSize": 12,
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "borderSize": 0,
  "toolTipBorderSize": 1,
  "toolTipPaddingBottom": 4,
  "toolTipShadowVerticalLength": 0,
  "toolTip": "Fullscreen",
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowColor": "#000000",
  "minWidth": 1,
  "toolTipPaddingLeft": 6,
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "shadow": false,
  "top": "2.12%",
  "cursor": "hand",
  "paddingLeft": 0,
  "paddingBottom": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontWeight": "normal",
  "id": "IconButton_FE83101A_D52D_EBCE_41E1_D12715BD4BB1",
  "horizontalAlign": "center",
  "toolTipShadowHorizontalLength": 0,
  "maxWidth": 128,
  "paddingTop": 0,
  "class": "IconButton",
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "backgroundOpacity": 0,
  "toolTipFontColor": "#606060",
  "right": "1.01%",
  "toolTipFontFamily": "Arial",
  "verticalAlign": "middle"
 },
 {
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "borderRadius": 0,
  "minHeight": 0,
  "borderSize": 0,
  "minWidth": 0,
  "shadow": false,
  "top": 0,
  "paddingLeft": 0,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0
  ],
  "id": "veilPopupPanorama",
  "visible": false,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "paddingTop": 0,
  "class": "UIComponent",
  "left": 0,
  "bottom": 0,
  "backgroundOpacity": 0.55,
  "right": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "backgroundColor": [],
  "paddingRight": 0,
  "borderRadius": 0,
  "minHeight": 0,
  "borderSize": 0,
  "minWidth": 0,
  "scaleMode": "custom",
  "shadow": false,
  "top": 0,
  "paddingLeft": 0,
  "paddingBottom": 0,
  "backgroundColorRatios": [],
  "id": "zoomImagePopupPanorama",
  "visible": false,
  "paddingTop": 0,
  "class": "ZoomImage",
  "left": 0,
  "bottom": 0,
  "backgroundOpacity": 1,
  "right": 0
 },
 {
  "gap": 5,
  "backgroundColorDirection": "vertical",
  "iconHeight": 20,
  "rollOverIconColor": "#666666",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontSize": 12,
  "mode": "push",
  "paddingRight": 5,
  "textDecoration": "none",
  "iconColor": "#000000",
  "borderRadius": 0,
  "iconBeforeLabel": true,
  "minHeight": 0,
  "iconWidth": 20,
  "borderSize": 0,
  "minWidth": 0,
  "layout": "horizontal",
  "fontColor": "#FFFFFF",
  "shadow": false,
  "horizontalAlign": "center",
  "top": 10,
  "fontWeight": "normal",
  "paddingLeft": 5,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "cursor": "hand",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "closeButtonPopupPanorama",
  "fontFamily": "Arial",
  "iconLineWidth": 5,
  "visible": false,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "paddingTop": 5,
  "pressedIconColor": "#888888",
  "fontStyle": "normal",
  "shadowColor": "#000000",
  "class": "CloseButton",
  "shadowBlurRadius": 6,
  "shadowSpread": 1,
  "backgroundOpacity": 0.3,
  "label": "",
  "right": 10,
  "verticalAlign": "middle"
 }
], 
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": "100%",
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); }
 },
 "id": "rootPlayer",
 "gap": 10,
 "paddingTop": 0,
 "class": "Player",
 "start": "this.playAudioList([this.audio_CA9C5114_D9A5_DDB3_41E8_3F18D07CF996, this.audio_CAA18142_D9A5_DD96_4198_A5886669F5D4, this.audio_CAA1C148_D9A5_DD92_41EA_704C3491B8F2]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_F9786E62_D52F_147E_4181_C63224778A3E], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_FE83101A_D52D_EBCE_41E1_D12715BD4BB1].forEach(function(component) { component.set('visible', false); }) }",
 "vrPolyfillScale": 0.5,
 "buttonToggleFullscreen": "this.IconButton_FE83101A_D52D_EBCE_41E1_D12715BD4BB1",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})