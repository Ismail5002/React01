import React from 'react'
import classes from './Mypost.module.css'


const Myprofile = () => {
  return (
    <div className={classes.container}>


      <div className={classes.profile} >
        <img src='https://www.interfax.ru/ftproot/photos/photostory/2019/10/16/wild4_700.jpg' />
      </div>


      <div className={classes.avatar}>
        <img clas src="https://avatars.mds.yandex.net/i?id=c00c15b4c0de6d1e903a1afe440c62ab-5115049-images-thumbs&n=13" alt="image doesnt work" />
      </div>

      <div className={classes.aboutAllMe}>
        <div className={classes.myName}>
          <h2>User</h2>
          <div className={classes.aboutMe}>
            <ol>
              <li>
                My birt day: 21.01.2005
              </li>
              <li>
                City: Mockow
              </li>
              <li>
                Education: Secondary education
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Myprofile
