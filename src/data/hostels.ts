import type { IconName } from '../components/icon-registry'

// The two side-by-side columns on the home page were identical markup driven by
// separate title/points arrays. Driving them from one list keeps their structure
// in a single place and makes adding a third column a data-only change.
export const HOSTEL_COLUMNS: {
  icon: IconName
  title: string
  points: string[]
  shaded: boolean
}[] = [
  {
    icon: 'building',
    title: 'New Hostels',
    shaded: false,
    points: [
      'Skip the learning curve',
      'Stop costly mistakes in pre-planning and launch before even making them',
      'Fast track to the proven and innovative methods that achieve results',
      'Organize an efficient and sustainable operation from the very beginning',
    ],
  },
  {
    icon: 'trend-up',
    title: 'Existing Hostels',
    shaded: true,
    points: [
      'Recognize root problems and deal with them to strengthen the opportunities in your hostel',
      'Un-tap the knowledge of Industry experts with years of experience to guide yours to the results your hostel is capable of',
      'Organize and structure your establishment in a way for your business to be sustainable rather than dependant on you or any other person in it',
      'Potentialize your sales to the maximum',
    ],
  },
]
