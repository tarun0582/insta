
export const validator = {
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    password: /^(?=.{6,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
    text: /^[a-zA-Z,'.\-\s]*$/,
}
export const parentId='Null'
export const nav_link=[{
    name:'logOut',
    click:'logOut()',
}]
export const routing = {
    auth : {
       login: '/main/login',
       signUp: '/main/signup',
       forgot: '/main/forgot',
       reset:'Password/ResetPassword'
   },
   User:{
    search:'User/Search'
   },
   home:{
     view_reels_url : '/home/viewreels',
     create_reals_url : '/home/createreals',
     home_post_url : '/home/homepost',
     login_url : '/main/login',
   }

   



}