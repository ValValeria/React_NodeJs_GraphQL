import data from './admin.data'

class User{
       constructor(){
           this.isAdmin = false;
           this.adminConfig = data;
       }

       isUserAdmin(data){
          const is = JSON.stringify(data) == JSON.stringify(this.adminConfig)

          if(is){
              this.isAdmin = true;
          }

          return is;
       }
}

const u = new User();

export {u as user};
