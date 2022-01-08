// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import styles
import "~/assets/scss/_init.scss"

import DefaultLayout from '~/layouts/Default.vue'

// Storyblok Components
import BlokPage from '~/components/BlokPage.vue'
import BlokButton from '~/components/BlokButton.vue'
import BlokButtons from '~/components/BlokButtons.vue'
import BlokGroup from '~/components/BlokGroup.vue'
import BlokRichtext from '~/components/BlokRichtext.vue'
import BlokImage from '~/components/BlokImage.vue'
import BlokAccordion from '~/components/BlokAccordion.vue'

// Other components
import Accordion from '~/components/Accordion.vue'
import AccordionItem from '~/components/AccordionItem.vue'


// Import other tools
import { marked } from 'marked'
import slugify from 'slugify'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Register Bloks
  Vue.component('BlokPage', BlokPage)
  Vue.component('BlokButton', BlokButton)
  Vue.component('BlokButtons', BlokButtons)
  Vue.component('BlokGroup', BlokGroup)
  Vue.component('BlokRichtext', BlokRichtext)
  Vue.component('BlokImage', BlokImage)
  Vue.component('BlokAccordion', BlokAccordion)

  // Register other components
  Vue.component('Accordion', Accordion)
  Vue.component('AccordionItem', AccordionItem)

  // Register external npm packages (i.e. not Vue plugins)
  // See  https://gridsome.org/docs/assets-scripts/#using-an-external-library-1
  Vue.prototype.$marked = marked; // For parsing markdown
  Vue.prototype.$slugify = slugify;
}
