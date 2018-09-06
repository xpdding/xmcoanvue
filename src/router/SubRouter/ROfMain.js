import Self from '@/components/Self/Self'
import AddComments from '@/components/AddComments/AddComments'
import See from '@/components/See/See'
import RatingView from '@/components/RatingView/RatingView'

export const ROfMain = [{
  path: '/self',
  name: 'Self',
  component: Self
}, {
  path: '/see',
  name: 'See',
  component: See
},
{
  path: '/addcomments',
  name: 'AddComments',
  component: AddComments
},
{
  path: '/ratingview',
  name: 'RatingView',
  component: RatingView
}
]
