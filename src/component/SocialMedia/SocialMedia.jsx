import './SocialMedia.css'
import SocialMediaPost from '../SocialMediaPost/SocialMediaPost'

const post = [
  {id:1,
    profileUrl:'https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png',
    content:'Do not forget to bring your suitDo not forget to bring your suit'
  },
  {id:2,
    profileUrl:'https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png',
    content:'Do not forget to bring your suit Do not forget to bring your suit'
  },
  {id:3,
    profileUrl:'https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png',
    content:'Do not forget to bring your suit'
  },
  {id:4,
    profileUrl:'https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png',
    content:'Do not forget to bring your suit'
  }
]
export default function SocialMedia() {
  return (
    <div className='SocialMedia'>
      <div className={['socialMedia_title-container','flex','flex-end'].join(' ')}>
        <img className='socialMedia-title-img' src='https://e7.pngegg.com/pngimages/347/14/png-clipart-twitter-icon-in-black-circle-icons-logos-emojis-social-media-icons-thumbnail.png' alt='as'/>
        <p className='clear-padding clear-margin socialMedia-title'>Twitter Feed</p>
        <span className='socialMedia-city'>#France</span>
      </div>
      <div className='posts'>
        {post.map(item => {
          return (
            <div key={item.id.toString()}>
              <SocialMediaPost item={item} />
            </div>

          )
        })}
      </div>
      <div>
      <button className="Next-btn">NEXT</button></div>
    </div>
  )
}
