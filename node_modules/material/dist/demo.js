console.log('demo')

import {
  Button,
  Component,
  Container,
  Card,
  Checkbox,
  Dialog,
  Divider,
  Drawer,
  Form,
  Image,
  List,
  Item,
  Progress,
  Menu,
  Slider,
  Switch,
  Text,
  Textfield,
  Toolbar,
  Layout
} from 'material'

// import Material from 'material';
// console.log('Material', Material);

import iconMenu from './icon/navi.svg'
import iconMore from './icon/more.svg'
import iconApps from './icon/apps.svg'
import iconStar from './icon/star.svg'
import iconHappy from './icon/happy.svg'

console.log('log')

document.addEventListener('DOMContentLoaded', function () {
  var layout = new Layout([Component, 'demo', { display: 'flex', direction: 'vertical' },
    [Component, 'head', { display: 'flex', direction: 'horizontal' },
      [Toolbar, 'toolbar', { flex: 1, display: 'flex', direction: 'horizontal' },
        [Button, 'menu-navi', { icon: iconMenu, type: 'action' }],
        [Text, 'app-title', { text: 'Material' }]
      ],
      [Toolbar, 'desk', { display: 'flex', direction: 'horizontal' },
        [Button, 'menu-more', { icon: iconMore, type: 'action' }]
      ]
    ],
    [Drawer, 'navi', { css: 'drawer-temporary', type: 'temporary', size: '280px' },
      [Component, 'navi-head', { theme: 'dark' },
        [Text, 'app-title', { text: 'Components' }]
      ],
      [List, 'navi-list', { theme: 'dark' }]
    ],
    [Container, 'body', { flex: '1' },
      [Container, 'container-components', { },
        [Text, 'text', { text: 'Components', type: 'title' }]
      ],
      // Buttons
      [Card, 'buttons', { },
        [Toolbar, 'toolbar-buttons', {},
          [Text, 'buttons-title', { text: 'Buttons'}]
        ],
        [Container, 'button-body', {},
          [Button, 'first', { text: 'Flat' }],
          [Button, 'second', { text: 'Raised', type: 'raised', color: 'primary' }],
          [Button, 'third', { icon: iconStar, type: 'action' }],
          [Button, 'fourth', { icon: iconStar, text: 'text' }]
        ]
      ],

      // Buttons
      [Card, 'buttons', { },
        [Toolbar, 'toolbar-buttons', {},
          [Text, 'buttons-title', { text: 'Floating Buttons'}]
        ],
        [Container, 'button-body', {},
          [Button, 'fifth', { icon: iconStar, type: 'floating', color: 'primary' }],
          [Button, 'six', { icon: iconHappy, type: 'floating', style: 'mini', color: 'primary' }],
          [Button, 'fifth', { icon: iconStar, type: 'floating', color: 'secondary' }],
          [Button, 'six', { icon: iconHappy, type: 'floating', style: 'mini', color: 'secondary' }]
        ]
      ],
      [Card, 'checkboxes', { },
        [Toolbar, 'toolbar', {},
          [Text, 'checkbox-title', { text: 'Checkboxes'}]
        ],
        [Container, 'checkbox-body', {},
          [Checkbox, 'checkbox', { text: 'Checkbox' }],
          [Checkbox, 'checkbox-checked', { text: 'Checked', checked: true }],
          [Checkbox, 'checkbox-disabled', { text: 'Disabled', disabled: true }]
        ]
      ],
      [Card, 'switches', { },
        [Toolbar, 'switch-toolbar', {},
          [Text, 'switch-title', { text: 'Switches'}]
        ],
        [Container, 'switch-body', {},
          [Switch, 'switch', { text: 'Switch' }],
          [Switch, 'switch-checked', { text: 'Checked', checked: true }],
          [Switch, 'switch-disabled', { text: 'Disabled', disabled: true }]
        ]
      ],
      [Card, 'progress indicators', { },
        [Toolbar, 'progress-toolbar', {},
          [Text, 'progress-title', { text: 'Progress indicators'}]
        ],
        [Container, 'progress-body', {},
          [Progress, 'progress', { progress: '60%' }],
          [Progress, 'progress-indeterminate', { type: 'indeterminate' }]
        ]
      ],
      [Card, 'sliders', { },
        [Toolbar, 'slider-toolbar', {},
          [Text, 'slider-title', { text: 'Sliders'}]
        ],
        [Container, 'slider-body', {},
          [Slider, 'slider', { text: 'Slider' }],
          [Slider, 'slider-checked', { text: 'Checked', checked: true }],
          [Slider, 'slider-disabled', { text: 'Disabled', disabled: true }]
        ]
      ]
    ]
  ], document.body)

  var moreButton = layout.get('menu-more').on('click', (e) => {
    layout.get('more-menu').show(e)
  })

  var naviMenu = layout.get('menu-navi')

  naviMenu.on('click', (e) => {
    layout.get('navi').open()
  })
})
