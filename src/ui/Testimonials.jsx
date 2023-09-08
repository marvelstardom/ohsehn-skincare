import React from 'react'
import Avatar from 'react-avatar';

export default function Testimonials() {
  return (
    <div className='lg:py-32 lg:px-24 py-20 bg-white'>
      <h1 className='font-bold lg:text-6xl lg:mb-12 text-4xl mb-8 px-2 lg:text-center'>What our clients have to say</h1>
      <ul className='lg:grid lg:grid-cols-4 gap-10 px-12'>
        <li>
            <Avatar name="John Doe" size="40" color={Avatar.getRandomColor('sitebase', ['blue', 'green', 'gray'])} round={true} className='mb-4' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sunt tempore exercitationem quia quasi quidem velit at? Quaerat, labore, architecto autem repellat assumenda aliquam voluptas cupiditate quis eligendi expedita eveniet.</p>
        </li>
        <li>
            <Avatar name="Maxwell Stuart" size="40" color={Avatar.getRandomColor('sitebase', ['red', 'blue', 'gray'])} round={true} className='mb-4' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sunt tempore exercitationem quia quasi quidem velit at? Quaerat, labore, architecto autem repellat assumenda aliquam voluptas cupiditate quis eligendi expedita eveniet.</p>
        </li>
        <li>
            <Avatar name="John Doe" size="40" color={Avatar.getRandomColor('sitebase', ['red', 'green', 'gray'])} round={true} className='mb-4' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sunt tempore exercitationem quia quasi quidem velit at? Quaerat, labore, architecto autem repellat assumenda aliquam voluptas cupiditate quis eligendi expedita eveniet.</p>
        </li>
        <li>
            <Avatar name="John Doe" size="40" color={Avatar.getRandomColor('sitebase', ['red', 'green', 'gray'])} round={true} className='mb-4' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sunt tempore exercitationem quia quasi quidem velit at? Quaerat, labore, architecto autem repellat assumenda aliquam voluptas cupiditate quis eligendi expedita eveniet.</p>
        </li>
      </ul>
    </div>
  )
}
