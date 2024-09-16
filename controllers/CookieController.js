class CookieController{
    static setcookie=async(req,res)=>{
        try{
            res.cookie("cart",45)
            res.send("Cookie set...")
        }catch(err){
            console.log(err)
        }
    }
    static getcookie=(req,res)=>{
            console.log(req.cookies)
            res.send("Cookie get...")
    }
    static deletecookie=(req,res)=>{
            res.clearCookie("cart")
            res.send("Cookie cleared...")
    }
}

export default CookieController