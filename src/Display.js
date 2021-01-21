import React from 'react'


function Display(props) {
  const { title, url, text, author, date } = props;

  const getDate = () => {
    const today = new Date()
    return today.toLocaleDateString()
}

return (
  <>
		<h1>NASA Astronomy Photo of the Day</h1>
    <h3>{title}</h3>
    <img src={url} alt=''></img>
    <h5>Copyright | {author} | {date}</h5>
    <p>{text}</p>
  </>
  )
}

export default Display