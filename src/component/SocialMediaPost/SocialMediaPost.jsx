import './SocialMediaPost.css'

export default function SocialMediaPost(props) {
  const{item}=props
  return (
    <div className='socialMedia-post flex flex-center'>
      <img className='post-img' src={item.profileUrl } alt='df'/>
              <p className='post-content'>{item.content}</p>  
    </div>
  )
}
