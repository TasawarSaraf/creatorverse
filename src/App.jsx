import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/Routes'
import elonMusk from './assets/elonMusk.png'

function App() {
  const [count, setCount] = useState(0)


  const user = {
    name: 'John Doe',
    description: 'Avid traveler, photographer, and coffee enthusiast. Loves exploring new cultures and capturing moments through the lens.',
    socialMediaLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/johndoe', icon: '/path/to/instagram-icon.png' },
      { platform: 'Facebook', url: 'https://www.facebook.com/johndoe', icon: '/path/to/facebook-icon.png' },
      { platform: 'YouTube', url: 'https://www.youtube.com/johndoe', icon: '/path/to/youtube-icon.png' }
    ],
    imageUrl: elonMusk // Replace with actual image URL
  };
  

  return (
    <>
      <Hero/>
      <Card 
        name={user.name}
        description={user.description}
        socialMediaLinks={user.socialMediaLinks}
        imageUrl={user.imageUrl}
      />

      {/** Set the routes here on App.js */}
      <Routes/>

      
    </>
  )
}

export default App;
