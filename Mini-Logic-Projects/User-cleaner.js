// User-Cleaner

// tasks performs :
// removes -> password
// trims -> username
// changes -> theme
// add -> roles ("comment")



const users = [

{
   id:1,
   username:" abc ",
   password:"123",

   settings:{
      theme:"dark"
   },

   roles:[
      "read"
   ]
},

{
   id:2,
   username:"bcc ",
   password:"456",

   settings:{
      theme:"dark"
   },

   roles:[
      "read",
      "write"
   ]
}

];

const cleanedUsers = users.map(
   (item) => {

      const {password,username,...remains } = item;

      return {

         username : username.trim(),
         ...remains,
         settings : { theme : "light" , alert :true},
         roles : [...remains.roles , 'comments']
         
      };
   }
)


console.log(cleanedUsers);
