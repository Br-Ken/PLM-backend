import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async(req, res) =>{
    // try{
    //     let data = await db.users.findAll();
    //     console.log('--------')
    //     console.log(data)
    //     console.log('--------')
    //     return res.render('homepage.ejs',{
    //         data: JSON.stringify(data)
    //     });
    // }catch(e){
    //     console.log(e)
    // }
    return res.render('homepage.ejs');
}

let getCRUD = (req, res) =>{
    
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) =>{
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    console.log(req.body);
    return res.send('post crud form server');
}

module.exports ={
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}