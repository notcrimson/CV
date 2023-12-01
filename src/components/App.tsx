import './App.css';
import Card from './Card';

const general = [
  {
    name: "name",
    type: "text"
  },
  {
    name: "email",
    type: "text"
  },
  {
    name: "phone",
    type: "text"
  },

]
const education = [
  {
    name: "school name",
    type: "text"
  },
  {
    name: "title of study",
    type: "text"
  },
  {
    name: "date of study",
    type: "date"
  },
]
const practical = [
  {
    name: "company name",
    type: "text"
  },
  {
    name: "position of title",
    type: "text"
  },
  {
    name: "responsibilities",
    type: "text"
  },
  {
    name: "date from",
    type: "date"
  },
  {
    name: "date until",
    type: "date"
  },
]


export const App = () => {
  return (
    <div>
      <Card feilds={general} />
      <Card feilds={education} />
      <Card feilds={practical} />
    </div >
  )
}