import bg from '../../assets/images/bg.png';


const HomeSection = () => {
  return (
    <div className="bg__header">
      <div className="bg__wrapper_img" style={{ backgroundImage: `url(${bg})`, width: '100%', height: '700', }}>
        <div className='bg_overlay'>
          <div className="bg__wrapper_info" style={{ display: 'inline-block', marginLeft: '200px', marginTop: '50px'}} >
          <h2 className="bg__header-h1">Plateau State Open <br/> Government Partnership</h2>
          <p className="text_p" style={{ margin: '4rem 0' }}>Lorem ipsum dolor sit amet, consectetur Sit tellus lobortis sed senectus vivamus molestie. 
          <br/> Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
          <div><button type="button" className="custom_button">Login/Register</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
    export default HomeSection;