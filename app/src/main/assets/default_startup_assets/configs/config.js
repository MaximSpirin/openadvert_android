{
    "params": {
        "taxiMode": false,
        "statsTypes": [
            {
                "internalType": "ad_rotator",
                "publicType": "1"
            },
            {
                "internalType": "interactive",
                "publicType": "2"
            },
            {
                "internalType": "button",
                "publicType": "3"
            },
            {
                "internalType": "toggle_btn",
                "publicType": "4"
            },
            {
                "internalType": "tab",
                "publicType": "5"
            },
            {
                "internalType": "rss_item_thumb",
                "publicType": "6"
            },
            {
                "internalType": "listings_item_thumb",
                "publicType": "7"
            },
            {
                "internalType": "ad_rotator_press",
                "publicType": "8"
            }
        ],
        "onShowInteractive": {
            "commands": [
                {
                    "command": "hide_block",
                    "params": {
                        "blocks": [
                            "banner_block",
                            "tower_block",
                            "screen_saver_block",
                            "content",
                            "%mainMenuBlockId"
                        ]
                    }
                },
                {
                    "command": "show_block",
                    "params": {
                        "blocks": [
                            "interactive_block"
                        ]
                    }
                },
                {
                    "command": "unselect_toggle_button",
                    "params": {
                        "blocks": [
                            "main_menu_button"
                        ]
                    }
                }
            ]
        },
        "idleInterval": 120,
        "tickerText": "Thank you for riding with us",
        "adminPassword": "1234",
        "interfaceHeight": 600,
        "startInIdleMode": true,
        "onEnterIdleMode": {
            "commands": [
                {
                    "command": "hide_block",
                    "params": {
                        "blocks": [
                            "banner_block",
                            "tower_block",
                            "%mainMenuBlockId",
                            "content"
                        ]
                    }
                },
                {
                    "command": "show_block",
                    "params": {
                        "blocks": [
                            "screen_saver_block"
                        ]
                    }
                },
                {
                    "command": "unselect_toggle_button",
                    "params": {
                        "blocks": [
                            "main_menu_button"
                        ]
                    }
                }
            ]
        },
        "interfaceWidth": 1024,
        "mainMenuBlockId": "1-main_menu"
    },
    "lastUpdate": "27-Mar-2014 16:53",
    "version": "123",
    "interfaceLayout": [
        {
            "contentScaleMode": "noScale",
            "height": "354",
            "children": [
                {
                    "type": "block",
                    "canInteract": true,
                    "y": 30,
                    "backgroundImage": "/media/74a49f9f.png",
                    "onPress": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "menu_selector_panel",
                                        "95-selector",
                                        "95-menu_label",
                                        "44-selector",
                                        "44-menu_label",
                                        "77-selector",
                                        "77-menu_label",
                                        "78-selector",
                                        "78-menu_label",
                                        "89-selector",
                                        "89-menu_label",
                                        "98-selector",
                                        "98-menu_label",
                                        "96-selector",
                                        "96-menu_label",
                                        "97-selector",
                                        "97-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "show_block",
                                "params": {
                                    "blocks": [
                                        "1-selector",
                                        "1-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "menu_selector_button"
                                    ]
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "1-main_menu",
                                    "name": "mainMenuBlockId"
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "",
                                    "name": "tickerText"
                                }
                            }
                        ]
                    },
                    "x": 30,
                    "id": "1-selector_panel_button",
                    "depthLevel": 0
                },
                {
                    "type": "block",
                    "canInteract": true,
                    "y": 150,
                    "backgroundImage": "/media/98335077.png",
                    "onPress": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "menu_selector_panel",
                                        "1-selector",
                                        "1-menu_label",
                                        "44-selector",
                                        "44-menu_label",
                                        "77-selector",
                                        "77-menu_label",
                                        "78-selector",
                                        "78-menu_label",
                                        "89-selector",
                                        "89-menu_label",
                                        "98-selector",
                                        "98-menu_label",
                                        "96-selector",
                                        "96-menu_label",
                                        "97-selector",
                                        "97-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "show_block",
                                "params": {
                                    "blocks": [
                                        "95-selector",
                                        "95-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "menu_selector_button"
                                    ]
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "95-main_menu",
                                    "name": "mainMenuBlockId"
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "Добро пожаловать! Надеемся, что путешествие вам понравится",
                                    "name": "tickerText"
                                }
                            }
                        ]
                    },
                    "x": 100,
                    "id": "95-selector_panel_button",
                    "depthLevel": 0
                },
                {
                    "type": "block",
                    "canInteract": true,
                    "y": 30,
                    "backgroundImage": "/media/79f624be.png",
                    "onPress": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "menu_selector_panel",
                                        "1-selector",
                                        "1-menu_label",
                                        "95-selector",
                                        "95-menu_label",
                                        "77-selector",
                                        "77-menu_label",
                                        "78-selector",
                                        "78-menu_label",
                                        "89-selector",
                                        "89-menu_label",
                                        "98-selector",
                                        "98-menu_label",
                                        "96-selector",
                                        "96-menu_label",
                                        "97-selector",
                                        "97-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "show_block",
                                "params": {
                                    "blocks": [
                                        "44-selector",
                                        "44-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "menu_selector_button"
                                    ]
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "44-main_menu",
                                    "name": "mainMenuBlockId"
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "Bienvenue à Taxi Interactive. Nous espérons que vous apprécierez votre voyage.",
                                    "name": "tickerText"
                                }
                            }
                        ]
                    },
                    "x": 100,
                    "id": "44-selector_panel_button",
                    "depthLevel": 0
                },
                {
                    "type": "block",
                    "canInteract": true,
                    "y": 90,
                    "backgroundImage": "/media/d833ee9e.png",
                    "onPress": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "menu_selector_panel",
                                        "1-selector",
                                        "1-menu_label",
                                        "95-selector",
                                        "95-menu_label",
                                        "44-selector",
                                        "44-menu_label",
                                        "78-selector",
                                        "78-menu_label",
                                        "89-selector",
                                        "89-menu_label",
                                        "98-selector",
                                        "98-menu_label",
                                        "96-selector",
                                        "96-menu_label",
                                        "97-selector",
                                        "97-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "show_block",
                                "params": {
                                    "blocks": [
                                        "77-selector",
                                        "77-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "menu_selector_button"
                                    ]
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "77-main_menu",
                                    "name": "mainMenuBlockId"
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "Benvenuti a Taxi Interactive. Ci auguriamo che il vostro viaggio.",
                                    "name": "tickerText"
                                }
                            }
                        ]
                    },
                    "x": 30,
                    "id": "77-selector_panel_button",
                    "depthLevel": 0
                },
                {
                    "type": "block",
                    "canInteract": true,
                    "y": 90,
                    "backgroundImage": "/media/09ba2e6d.png",
                    "onPress": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "menu_selector_panel",
                                        "1-selector",
                                        "1-menu_label",
                                        "95-selector",
                                        "95-menu_label",
                                        "44-selector",
                                        "44-menu_label",
                                        "77-selector",
                                        "77-menu_label",
                                        "89-selector",
                                        "89-menu_label",
                                        "98-selector",
                                        "98-menu_label",
                                        "96-selector",
                                        "96-menu_label",
                                        "97-selector",
                                        "97-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "show_block",
                                "params": {
                                    "blocks": [
                                        "78-selector",
                                        "78-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "menu_selector_button"
                                    ]
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "78-main_menu",
                                    "name": "mainMenuBlockId"
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "Bienvenidos a Taxi Interactivo. Esperamos que disfrute de su viaje.",
                                    "name": "tickerText"
                                }
                            }
                        ]
                    },
                    "x": 100,
                    "id": "78-selector_panel_button",
                    "depthLevel": 0
                },
                {
                    "type": "block",
                    "canInteract": true,
                    "y": 150,
                    "backgroundImage": "/media/3a8e403c.png",
                    "onPress": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "menu_selector_panel",
                                        "1-selector",
                                        "1-menu_label",
                                        "95-selector",
                                        "95-menu_label",
                                        "44-selector",
                                        "44-menu_label",
                                        "77-selector",
                                        "77-menu_label",
                                        "78-selector",
                                        "78-menu_label",
                                        "98-selector",
                                        "98-menu_label",
                                        "96-selector",
                                        "96-menu_label",
                                        "97-selector",
                                        "97-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "show_block",
                                "params": {
                                    "blocks": [
                                        "89-selector",
                                        "89-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "menu_selector_button"
                                    ]
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "89-main_menu",
                                    "name": "mainMenuBlockId"
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "欢迎来到出租车内互动。我们希望您享受您的旅程。",
                                    "name": "tickerText"
                                }
                            }
                        ]
                    },
                    "x": 30,
                    "id": "89-selector_panel_button",
                    "depthLevel": 0
                },
                {
                    "type": "block",
                    "canInteract": true,
                    "y": 210,
                    "backgroundImage": "/media/224bea89.png",
                    "onPress": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "menu_selector_panel",
                                        "1-selector",
                                        "1-menu_label",
                                        "95-selector",
                                        "95-menu_label",
                                        "44-selector",
                                        "44-menu_label",
                                        "77-selector",
                                        "77-menu_label",
                                        "78-selector",
                                        "78-menu_label",
                                        "89-selector",
                                        "89-menu_label",
                                        "96-selector",
                                        "96-menu_label",
                                        "97-selector",
                                        "97-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "show_block",
                                "params": {
                                    "blocks": [
                                        "98-selector",
                                        "98-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "menu_selector_button"
                                    ]
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "98-main_menu",
                                    "name": "mainMenuBlockId"
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "Willkommen bei Taxi Interactive. Wir hoffen, Sie genießen Sie Ihre Reise.",
                                    "name": "tickerText"
                                }
                            }
                        ]
                    },
                    "x": 30,
                    "id": "98-selector_panel_button",
                    "depthLevel": 0
                },
                {
                    "type": "block",
                    "canInteract": true,
                    "y": 270,
                    "backgroundImage": "/media/f1019ea5.png",
                    "onPress": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "menu_selector_panel",
                                        "1-selector",
                                        "1-menu_label",
                                        "95-selector",
                                        "95-menu_label",
                                        "44-selector",
                                        "44-menu_label",
                                        "77-selector",
                                        "77-menu_label",
                                        "78-selector",
                                        "78-menu_label",
                                        "89-selector",
                                        "89-menu_label",
                                        "98-selector",
                                        "98-menu_label",
                                        "97-selector",
                                        "97-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "show_block",
                                "params": {
                                    "blocks": [
                                        "96-selector",
                                        "96-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "menu_selector_button"
                                    ]
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "96-main_menu",
                                    "name": "mainMenuBlockId"
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "ยินดีต้อนรับสู่แท็กซี่อินเตอร์แอคที เราหวังว่าคุณจะสนุกกับการเดินทางของคุณ",
                                    "name": "tickerText"
                                }
                            }
                        ]
                    },
                    "x": 100,
                    "id": "96-selector_panel_button",
                    "depthLevel": 0
                },
                {
                    "type": "block",
                    "canInteract": true,
                    "y": 210,
                    "backgroundImage": "/media/726eac4b.png",
                    "onPress": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "menu_selector_panel",
                                        "1-selector",
                                        "1-menu_label",
                                        "95-selector",
                                        "95-menu_label",
                                        "44-selector",
                                        "44-menu_label",
                                        "77-selector",
                                        "77-menu_label",
                                        "78-selector",
                                        "78-menu_label",
                                        "89-selector",
                                        "89-menu_label",
                                        "98-selector",
                                        "98-menu_label",
                                        "96-selector",
                                        "96-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "show_block",
                                "params": {
                                    "blocks": [
                                        "97-selector",
                                        "97-menu_label"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "menu_selector_button"
                                    ]
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "97-main_menu",
                                    "name": "mainMenuBlockId"
                                }
                            },
                            {
                                "command": "set_global_argument",
                                "params": {
                                    "value": "مرحبا بكم في تاكسي التفاعلية. نأمل أن تستمتع رحلتك",
                                    "name": "tickerText"
                                }
                            }
                        ]
                    },
                    "x": 100,
                    "id": "97-selector_panel_button",
                    "depthLevel": 0
                }
            ],
            "blocksToIgnoreTouches": {
                "blocks": [
                    "menu_selector_panel",
                    "menu_selector_button"
                ]
            },
            "canInteract": true,
            "onTouchOutsideIgnoredBlocks": {
                "commands": [
                    {
                        "command": "hide_block",
                        "params": {
                            "blocks": [
                                "menu_selector_panel"
                            ]
                        }
                    },
                    {
                        "command": "unselect_toggle_button",
                        "params": {
                            "blocks": [
                                "menu_selector_button"
                            ]
                        }
                    }
                ]
            },
            "backgroundImage": "/media/b7f24a26.png",
            "x": 660,
            "type": "menu_selector",
            "y": 150,
            "id": "menu_selector_panel",
            "backgroundScaleMode": "exactFit",
            "depthLevel": 8,
            "visible": false,
            "autoStart": "true",
            "width": "204"
        },
        {
            "contentScaleMode": "noScale",
            "height": 36,
            "textStyle": "arial_18_white",
            "children": null,
            "canInteract": true,
            "visible": true,
            "depthLevel": 3,
            "type": "ticker",
            "y": 488,
            "id": "ticker_block",
            "tickerText": "Thank you for riding with us",
            "backgroundScaleMode": "noscale",
            "x": 0,
            "backgroundImage": "/media/df7cdc8c.png",
            "width": 1024
        },
        {
            "contentScaleMode": "noScale",
            "height": 388,
            "children": null,
            "canInteract": true,
            "visible": false,
            "depthLevel": 2,
            "type": "channel_container",
            "y": 100,
            "id": "content",
            "backgroundScaleMode": "noScale",
            "x": 0,
            "backgroundImage": "/media/7f7de4a3.png",
            "autoStart": true,
            "width": 922
        },
        {
            "type": "main_menu",
            "canInteract": true,
            "y": 114,
            "visible": false,
            "depthLevel": 6,
            "x": 167,
            "children": [
                {
                    "canInteract": true,
                    "statsId": 1,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 3,
                                                "header": "World News",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/3-tab.js",
                                                "id": "1-channel_3-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 93,
                                                "header": "Restaurants",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "listing",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/93-tab.js",
                                                "id": "1-channel_93-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 211,
                                                "header": "Map",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "defaultLocation": "22.2842766065079, 114.15426560000003",
                                                "type": "map",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "id": "1-channel_211-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "conditionsStyle": "arial_bold_19_white_center",
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 373,
                                                "header": "Hong Kong Weather",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "weather",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/373-tab.js",
                                                "id": "1-channel_373-tab",
                                                "headerStyle": "arial_bold_28_white_center",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "News",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "1-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "1-channel_button",
                    "x": 30,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/bb7f683f.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 3,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 2,
                                                "header": "Featured",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "listing",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/2-tab.js",
                                                "id": "3-channel_2-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Restaurants",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "3-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "3-channel_button",
                    "x": 160,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/ac15a5e6.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 143,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 4,
                                                "header": "BBC Sports",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/4-tab.js",
                                                "id": "143-channel_4-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Sports",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "143-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "143-channel_button",
                    "x": 290,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/7474a613.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 200,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 192,
                                                "header": "Computer Today",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/192-tab.js",
                                                "id": "200-channel_192-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Technology",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "200-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "200-channel_button",
                    "x": 420,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/7b3bc350.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 201,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 193,
                                                "header": "Daily Health",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/193-tab.js",
                                                "id": "201-channel_193-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Health",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "201-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "201-channel_button",
                    "x": 560,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/33c73ea1.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 202,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 194,
                                                "header": "Daily Joke",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/194-tab.js",
                                                "id": "202-channel_194-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Jokes",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "202-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "202-channel_button",
                    "x": 80,
                    "type": "button",
                    "y": 160,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/01b8c486.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 203,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 195,
                                                "header": "Showbiz ",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/195-tab.js",
                                                "id": "203-channel_195-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Showbiz",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "203-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "203-channel_button",
                    "x": 220,
                    "type": "button",
                    "y": 160,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/f1251d77.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 204,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 196,
                                                "header": "Music news",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/196-tab.js",
                                                "id": "204-channel_196-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Music",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "204-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "204-channel_button",
                    "x": 360,
                    "type": "button",
                    "y": 160,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/6720a4c6.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 205,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 197,
                                                "header": "Top Movies",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/197-tab.js",
                                                "id": "205-channel_197-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Cinema",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "205-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "205-channel_button",
                    "x": 500,
                    "type": "button",
                    "y": 160,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/6362d634.png",
                    "hitAreaWidth": 100
                }
            ],
            "height": 360,
            "id": "1-main_menu",
            "backgroundImage": "/media/65a08868.png",
            "width": 690
        },
        {
            "type": "main_menu",
            "canInteract": true,
            "y": 114,
            "visible": false,
            "depthLevel": 6,
            "x": 167,
            "children": [
                {
                    "canInteract": true,
                    "statsId": 219,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 200,
                                                "header": "В Мире",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/200-tab.js",
                                                "id": "219-channel_200-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 213,
                                                "header": "Экономика",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/213-tab.js",
                                                "id": "219-channel_213-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 199,
                                                "header": "Политика",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/199-tab.js",
                                                "id": "219-channel_199-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Новости",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "219-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "219-channel_button",
                    "x": 20,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/bb7f683f.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 220,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 202,
                                                "header": "Русская кухня",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "listing",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/202-tab.js",
                                                "id": "220-channel_202-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 203,
                                                "header": "Fast Food - Copy for RM",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "listing",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/203-tab.js",
                                                "id": "220-channel_203-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Рестораны",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "220-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "220-channel_button",
                    "x": 140,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/ac15a5e6.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 221,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 204,
                                                "header": "BBC Спорт",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/204-tab.js",
                                                "id": "221-channel_204-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Спорт",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "221-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "221-channel_button",
                    "x": 260,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/7474a613.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 222,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 205,
                                                "header": "компьютер",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/205-tab.js",
                                                "id": "222-channel_205-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Hi-Tech ",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "222-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "222-channel_button",
                    "x": 380,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/7b3bc350.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 223,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 206,
                                                "header": "Daily Health - Copy for RM",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/206-tab.js",
                                                "id": "223-channel_206-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Здоровье",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "223-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "223-channel_button",
                    "x": 500,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/33c73ea1.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 224,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 207,
                                                "header": "Daily Joke - Copy for RM",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/207-tab.js",
                                                "id": "224-channel_207-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Юмор",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "224-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "224-channel_button",
                    "x": 60,
                    "type": "button",
                    "y": 160,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/01b8c486.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 225,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 208,
                                                "header": "Showbiz  - Copy for RM",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/208-tab.js",
                                                "id": "225-channel_208-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Шоу бизнес",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "225-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "225-channel_button",
                    "x": 180,
                    "type": "button",
                    "y": 160,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/f1251d77.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 226,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 209,
                                                "header": "Music news - Copy for RM",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/209-tab.js",
                                                "id": "226-channel_209-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Музыка",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "226-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "226-channel_button",
                    "x": 300,
                    "type": "button",
                    "y": 160,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/6720a4c6.png",
                    "hitAreaWidth": 100
                },
                {
                    "canInteract": true,
                    "statsId": 227,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 210,
                                                "header": "Top Movies - Copy for RM",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/210-tab.js",
                                                "id": "227-channel_210-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Кино",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "227-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "227-channel_button",
                    "x": 420,
                    "type": "button",
                    "y": 160,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/6362d634.png",
                    "hitAreaWidth": 100
                }
            ],
            "height": 360,
            "id": "95-main_menu",
            "backgroundImage": "/media/65a08868.png",
            "width": 690
        },
        {
            "type": "main_menu",
            "canInteract": true,
            "y": 114,
            "visible": false,
            "depthLevel": 6,
            "x": 167,
            "children": [
                {
                    "canInteract": true,
                    "statsId": 265,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 267,
                                                "header": "Franch Nouvelles",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/267-tab.js",
                                                "id": "265-channel_267-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 266,
                                                "header": "Restaurants",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "listing",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/266-tab.js",
                                                "id": "265-channel_266-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "conditionsStyle": "arial_bold_19_white_center",
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 264,
                                                "header": "Paris Météo",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "weather",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/264-tab.js",
                                                "id": "265-channel_264-tab",
                                                "headerStyle": "arial_bold_28_white_center",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 265,
                                                "header": "Carte",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "defaultLocation": "22.2842766065079, 114.15426560000003",
                                                "type": "map",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "id": "265-channel_265-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Démo Manche",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "265-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "265-channel_button",
                    "x": 30,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/bb7f683f.png",
                    "hitAreaWidth": 100
                }
            ],
            "height": 360,
            "id": "44-main_menu",
            "backgroundImage": "/media/65a08868.png",
            "width": 690
        },
        {
            "type": "main_menu",
            "canInteract": true,
            "y": 114,
            "visible": false,
            "depthLevel": 6,
            "x": 167,
            "children": [],
            "height": 360,
            "id": "77-main_menu",
            "backgroundImage": "/media/65a08868.png",
            "width": 690
        },
        {
            "type": "main_menu",
            "canInteract": true,
            "y": 114,
            "visible": false,
            "depthLevel": 6,
            "x": 167,
            "children": [
                {
                    "canInteract": true,
                    "statsId": 206,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 273,
                                                "header": "Noticias",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/273-tab.js",
                                                "id": "206-channel_273-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 275,
                                                "header": "Restaurantes",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "listing",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/275-tab.js",
                                                "id": "206-channel_275-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "conditionsStyle": "arial_bold_19_white_center",
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 272,
                                                "header": "Barcelona El tiempo",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "weather",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/272-tab.js",
                                                "id": "206-channel_272-tab",
                                                "headerStyle": "arial_bold_28_white_center",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 274,
                                                "header": "Mapa",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "defaultLocation": "22.2842766065079, 114.15426560000003",
                                                "type": "map",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "id": "206-channel_274-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Demostración Channel",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "206-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "206-channel_button",
                    "x": 30,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/bb7f683f.png",
                    "hitAreaWidth": 100
                }
            ],
            "height": 360,
            "id": "78-main_menu",
            "backgroundImage": "/media/65a08868.png",
            "width": 690
        },
        {
            "type": "main_menu",
            "canInteract": true,
            "y": 114,
            "visible": false,
            "depthLevel": 6,
            "x": 167,
            "children": [
                {
                    "canInteract": true,
                    "statsId": 267,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 279,
                                                "header": "新闻",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/279-tab.js",
                                                "id": "267-channel_279-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 276,
                                                "header": "餐厅",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "listing",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/276-tab.js",
                                                "id": "267-channel_276-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "conditionsStyle": "arial_bold_19_white_center",
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 277,
                                                "header": "天气",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "weather",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/277-tab.js",
                                                "id": "267-channel_277-tab",
                                                "headerStyle": "arial_bold_28_white_center",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 278,
                                                "header": "地图",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "defaultLocation": "22.2842766065079, 114.15426560000003",
                                                "type": "map",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "id": "267-channel_278-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "示范通道",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "267-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "267-channel_button",
                    "x": 30,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/bb7f683f.png",
                    "hitAreaWidth": 100
                }
            ],
            "height": 360,
            "id": "89-main_menu",
            "backgroundImage": "/media/65a08868.png",
            "width": 690
        },
        {
            "type": "main_menu",
            "canInteract": true,
            "y": 114,
            "visible": false,
            "depthLevel": 6,
            "x": 167,
            "children": [
                {
                    "canInteract": true,
                    "statsId": 269,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 284,
                                                "header": "Nachrichten",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/284-tab.js",
                                                "id": "269-channel_284-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 285,
                                                "header": "Restaurants",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "listing",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/285-tab.js",
                                                "id": "269-channel_285-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "conditionsStyle": "arial_bold_19_white_center",
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 286,
                                                "header": "Wetter",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "weather",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/286-tab.js",
                                                "id": "269-channel_286-tab",
                                                "headerStyle": "arial_bold_28_white_center",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 287,
                                                "header": "Karte",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "defaultLocation": "22.2842766065079, 114.15426560000003",
                                                "type": "map",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "id": "269-channel_287-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "Demo-Kanal",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "269-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "269-channel_button",
                    "x": 30,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/bb7f683f.png",
                    "hitAreaWidth": 100
                }
            ],
            "height": 360,
            "id": "98-main_menu",
            "backgroundImage": "/media/65a08868.png",
            "width": 690
        },
        {
            "type": "main_menu",
            "canInteract": true,
            "y": 114,
            "visible": false,
            "depthLevel": 6,
            "x": 167,
            "children": [
                {
                    "canInteract": true,
                    "statsId": 268,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 280,
                                                "header": "ข่าว",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/280-tab.js",
                                                "id": "268-channel_280-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 281,
                                                "header": "ร้านอาหาร",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "listing",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/281-tab.js",
                                                "id": "268-channel_281-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "conditionsStyle": "arial_bold_19_white_center",
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 283,
                                                "header": "สภาพอากาศ",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "weather",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/283-tab.js",
                                                "id": "268-channel_283-tab",
                                                "headerStyle": "arial_bold_28_white_center",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 282,
                                                "header": "แผนที่",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "defaultLocation": "22.2842766065079, 114.15426560000003",
                                                "type": "map",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "id": "268-channel_282-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "สาธิตช่อง",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "268-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "268-channel_button",
                    "x": 30,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/bb7f683f.png",
                    "hitAreaWidth": 100
                }
            ],
            "height": 360,
            "id": "96-main_menu",
            "backgroundImage": "/media/65a08868.png",
            "width": 690
        },
        {
            "type": "main_menu",
            "canInteract": true,
            "y": 114,
            "visible": false,
            "depthLevel": 6,
            "x": 167,
            "children": [
                {
                    "canInteract": true,
                    "statsId": 270,
                    "onPress": {
                        "commands": [
                            {
                                "command": "show_std_channel",
                                "params": {
                                    "blocks": [
                                        "content"
                                    ],
                                    "channelConfig": {
                                        "tabUpStateDefaultColor": "#bdc3c7",
                                        "tabHeight": 45,
                                        "tabDelimiterSize": "0.5",
                                        "tabs": [
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 288,
                                                "header": "أخبار",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "rss",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/288-tab.js",
                                                "id": "270-channel_288-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 289,
                                                "header": "المطاعم",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "listing",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/289-tab.js",
                                                "id": "270-channel_289-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "conditionsStyle": "arial_bold_19_white_center",
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 290,
                                                "header": "طقس",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "type": "weather",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "tabConfigURL": "/content/290-tab.js",
                                                "id": "270-channel_290-tab",
                                                "headerStyle": "arial_bold_28_white_center",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            },
                                            {
                                                "tileListTopMargin": 15,
                                                "detailsDescriptionStyle": "arial_18_dark_grey_left",
                                                "tileListLeftMargin": 15,
                                                "statsId": 291,
                                                "header": "خريطة",
                                                "tileVerticalInterval": 15,
                                                "contentBgURL": "/media/7f7de4a3.png",
                                                "tileHorizontalInterval": 15,
                                                "downStateColor": "#ecf0f1",
                                                "thumbUpStateColor": "#bdc3c7",
                                                "detailsHeaderStyle": "arial_bold_25_dark_grey",
                                                "thumbDownStateColor": "#f1f1f1",
                                                "defaultLocation": "22.2842766065079, 114.15426560000003",
                                                "type": "map",
                                                "thumbWidth": 133,
                                                "contentBgScaleMode": "exactFit",
                                                "thumbHeight": 133,
                                                "upStateColor": "#bdc3c7",
                                                "thumbLabelStyle": "arial_14_white_center",
                                                "id": "270-channel_291-tab",
                                                "detailsSubheaderStyle": "arial_22_dark_grey_left"
                                            }
                                        ],
                                        "tabDownStateDefaultColor": "#ecf0f1",
                                        "tabLabelUpStateStyle": "arial_18_#464646_center_middle",
                                        "tabDelimiterColor": "#000000",
                                        "tabWidth": 230,
                                        "tabLabelDownStateStyle": "arial_18_#464646_center_middle"
                                    }
                                }
                            },
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            },
                            {
                                "command": "unselect_toggle_button",
                                "params": {
                                    "blocks": [
                                        "main_menu_button"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "y": 100,
                            "style": "arial_bold_14_light_grey_center",
                            "text": "قناة التجريبي",
                            "textHeight": 20,
                            "textWidth": 100,
                            "id": "270-button_label",
                            "x": 0
                        }
                    ],
                    "downStateColor": "#f1f1f1",
                    "id": "270-channel_button",
                    "x": 30,
                    "type": "button",
                    "y": 30,
                    "hitAreaHeight": 100,
                    "upStateColor": "#e1e1e1",
                    "topImageURL": "/media/bb7f683f.png",
                    "hitAreaWidth": 100
                }
            ],
            "height": 360,
            "id": "97-main_menu",
            "backgroundImage": "/media/65a08868.png",
            "width": 690
        },
        {
            "contentScaleMode": "exactFit",
            "height": 100,
            "width": 1024,
            "canInteract": true,
            "id": "banner_block",
            "depthLevel": 1,
            "type": "ad_rotator",
            "y": 0,
            "visible": false,
            "backgroundScaleMode": "exactFit",
            "x": 0,
            "backgroundImage": "/media/892c6197.png",
            "autoStart": false,
            "adTypeId": 1
        },
        {
            "contentScaleMode": "exactFit",
            "height": 388,
            "width": 102,
            "canInteract": true,
            "id": "tower_block",
            "depthLevel": 1,
            "type": "ad_rotator",
            "y": 100,
            "visible": false,
            "backgroundScaleMode": "exactFit",
            "x": 922,
            "backgroundColor": "#ecf0f1",
            "children": null,
            "autoStart": false,
            "adTypeId": 4
        },
        {
            "contentScaleMode": "noScale",
            "height": 488,
            "width": 1024,
            "canInteract": true,
            "id": "screen_saver_block",
            "depthLevel": 5,
            "type": "ad_rotator",
            "y": 0,
            "visible": true,
            "backgroundScaleMode": "noScale",
            "x": 0,
            "backgroundColor": "#000000",
            "children": null,
            "autoStart": true,
            "adTypeId": 2
        },
        {
            "contentScaleMode": "noScale",
            "height": 75,
            "children": [
                {
                    "contentScaleMode": "",
                    "onUnselect": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "menu_selector_panel"
                                    ]
                                }
                            }
                        ]
                    },
                    "children": [
                        {
                            "type": "block",
                            "y": 0,
                            "visible": false,
                            "statsId": 1,
                            "depthLevel": 0,
                            "id": "1-selector",
                            "backgroundImage": "/media/74a49f9f.png",
                            "x": 0
                        },
                        {
                            "type": "block",
                            "y": 0,
                            "visible": false,
                            "statsId": 95,
                            "depthLevel": 1,
                            "id": "95-selector",
                            "backgroundImage": "/media/98335077.png",
                            "x": 0
                        },
                        {
                            "type": "block",
                            "y": 0,
                            "visible": false,
                            "statsId": 44,
                            "depthLevel": 2,
                            "id": "44-selector",
                            "backgroundImage": "/media/79f624be.png",
                            "x": 0
                        },
                        {
                            "type": "block",
                            "y": 0,
                            "visible": false,
                            "statsId": 77,
                            "depthLevel": 3,
                            "id": "77-selector",
                            "backgroundImage": "/media/d833ee9e.png",
                            "x": 0
                        },
                        {
                            "type": "block",
                            "y": 0,
                            "visible": false,
                            "statsId": 78,
                            "depthLevel": 4,
                            "id": "78-selector",
                            "backgroundImage": "/media/09ba2e6d.png",
                            "x": 0
                        },
                        {
                            "type": "block",
                            "y": 0,
                            "visible": false,
                            "statsId": 89,
                            "depthLevel": 5,
                            "id": "89-selector",
                            "backgroundImage": "/media/3a8e403c.png",
                            "x": 0
                        },
                        {
                            "type": "block",
                            "y": 0,
                            "visible": false,
                            "statsId": 98,
                            "depthLevel": 6,
                            "id": "98-selector",
                            "backgroundImage": "/media/224bea89.png",
                            "x": 0
                        },
                        {
                            "type": "block",
                            "y": 0,
                            "visible": false,
                            "statsId": 96,
                            "depthLevel": 7,
                            "id": "96-selector",
                            "backgroundImage": "/media/f1019ea5.png",
                            "x": 0
                        },
                        {
                            "type": "block",
                            "y": 0,
                            "visible": false,
                            "statsId": 97,
                            "depthLevel": 8,
                            "id": "97-selector",
                            "backgroundImage": "/media/726eac4b.png",
                            "x": 0
                        }
                    ],
                    "id": "menu_selector_button",
                    "downStateImageURL": "/media/74a49f9f.png",
                    "x": 726,
                    "type": "toggle_button",
                    "onSelect": {
                        "commands": [
                            {
                                "command": "show_block",
                                "params": {
                                    "blocks": [
                                        "menu_selector_panel"
                                    ]
                                }
                            }
                        ]
                    },
                    "y": 14,
                    "backgroundScaleMode": "",
                    "depthLevel": 0,
                    "upStateImageURL": "/media/74a49f9f.png"
                },
                {
                    "type": "block",
                    "contentScaleMode": "",
                    "y": 12,
                    "backgroundImage": "/media/112acec8.jpg",
                    "depthLevel": 0,
                    "x": 9,
                    "canInteract": true,
                    "height": 50,
                    "id": "logo_container",
                    "onLongPress": {
                        "commands": [
                            {
                                "command": "show_radmin"
                            }
                        ]
                    },
                    "width": 150
                },
                {
                    "contentScaleMode": "",
                    "height": 64,
                    "onUnselect": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "%mainMenuBlockId"
                                    ]
                                }
                            }
                        ]
                    },
                    "canInteract": true,
                    "visible": true,
                    "downStateImageURL": "/media/941a5dbe.png",
                    "depthLevel": 2,
                    "type": "toggle_button",
                    "onSelect": {
                        "commands": [
                            {
                                "command": "hide_block",
                                "params": {
                                    "blocks": [
                                        "screen_saver_block",
                                        "interactive_block"
                                    ]
                                }
                            },
                            {
                                "command": "show_block",
                                "params": {
                                    "blocks": [
                                        "banner_block",
                                        "tower_block",
                                        "content",
                                        "%mainMenuBlockId"
                                    ]
                                }
                            }
                        ]
                    },
                    "y": 8,
                    "id": "main_menu_button",
                    "backgroundScaleMode": "",
                    "x": 355,
                    "upStateImageURL": "/media/4f7bd90e.png",
                    "children": [
                        {
                            "type": "text",
                            "y": 0,
                            "visible": true,
                            "style": "arial_bold_28_medGrey_center_middle",
                            "text": "MENU",
                            "textHeight": 64,
                            "showBorder": false,
                            "textWidth": 314,
                            "id": "1-menu_label",
                            "x": 0
                        },
                        {
                            "type": "text",
                            "y": 0,
                            "visible": false,
                            "style": "arial_bold_28_medGrey_center_middle",
                            "text": "Меню",
                            "textHeight": 64,
                            "showBorder": false,
                            "textWidth": 314,
                            "id": "95-menu_label",
                            "x": 0
                        },
                        {
                            "type": "text",
                            "y": 0,
                            "visible": false,
                            "style": "arial_bold_28_medGrey_center_middle",
                            "text": "MENU",
                            "textHeight": 64,
                            "showBorder": false,
                            "textWidth": 314,
                            "id": "44-menu_label",
                            "x": 0
                        },
                        {
                            "type": "text",
                            "y": 0,
                            "visible": false,
                            "style": "arial_bold_28_medGrey_center_middle",
                            "text": "MENU",
                            "textHeight": 64,
                            "showBorder": false,
                            "textWidth": 314,
                            "id": "77-menu_label",
                            "x": 0
                        },
                        {
                            "type": "text",
                            "y": 0,
                            "visible": false,
                            "style": "arial_bold_28_medGrey_center_middle",
                            "text": "MENU",
                            "textHeight": 64,
                            "showBorder": false,
                            "textWidth": 314,
                            "id": "78-menu_label",
                            "x": 0
                        },
                        {
                            "type": "text",
                            "y": 0,
                            "visible": false,
                            "style": "arial_bold_28_medGrey_center_middle",
                            "text": "菜单",
                            "textHeight": 64,
                            "showBorder": false,
                            "textWidth": 314,
                            "id": "89-menu_label",
                            "x": 0
                        },
                        {
                            "type": "text",
                            "y": 0,
                            "visible": false,
                            "style": "arial_bold_28_medGrey_center_middle",
                            "text": "Menü",
                            "textHeight": 64,
                            "showBorder": false,
                            "textWidth": 314,
                            "id": "98-menu_label",
                            "x": 0
                        },
                        {
                            "type": "text",
                            "y": 0,
                            "visible": false,
                            "style": "arial_bold_28_medGrey_center_middle",
                            "text": "เมนู",
                            "textHeight": 64,
                            "showBorder": false,
                            "textWidth": 314,
                            "id": "96-menu_label",
                            "x": 0
                        },
                        {
                            "type": "text",
                            "y": 0,
                            "visible": false,
                            "style": "arial_bold_28_medGrey_center_middle",
                            "text": "قائمة الطعام",
                            "textHeight": 64,
                            "showBorder": false,
                            "textWidth": 314,
                            "id": "97-menu_label",
                            "x": 0
                        }
                    ],
                    "autoStart": false,
                    "width": 314
                },
                {
                    "canInteract": false,
                    "height": 54,
                    "children": [
                        {
                            "type": "time_textual_output",
                            "y": 0,
                            "textStyle": "arial_bold_22_medGrey_center_middle",
                            "textHeight": 54,
                            "x": 0,
                            "textWidth": 150,
                            "id": "time_label",
                            "depthLevel": 5
                        }
                    ],
                    "visible": true,
                    "depthLevel": 5,
                    "type": "block",
                    "y": 12,
                    "id": "clock",
                    "x": 840,
                    "backgroundImage": "/media/0fb4e2de.png",
                    "autoStart": false,
                    "width": 150
                }
            ],
            "canInteract": true,
            "visible": true,
            "depthLevel": 4,
            "type": "block",
            "y": 524,
            "id": "bottom_bar",
            "backgroundScaleMode": "noScale",
            "x": 0,
            "backgroundImage": "/media/79bd3fef.png",
            "width": 1024
        },
        {
            "contentScaleMode": "exactFit",
            "height": 488,
            "width": 1024,
            "canInteract": true,
            "id": "interactive_block",
            "depthLevel": 7,
            "type": "interactive",
            "y": 0,
            "visible": false,
            "backgroundScaleMode": "exactFit",
            "x": 0,
            "autoStart": true,
            "adTypeId": 3
        }
    ]
}