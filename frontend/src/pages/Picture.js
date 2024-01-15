const Picture = ({ imageUrl }) => {
  return (
    <>
      {imageUrl && (
        <div className='mb-3'>
          <img src={imageUrl} alt='Profile' className='profile-picture' />
        </div>
      )}
    </>
  )
}
export default Picture