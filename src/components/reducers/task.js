const initialState ={

    task: "",
    isDel:false
   }
   
   
   const Tasks = (state = initialState ,action)=>{
       const {type,payload}= action;
       switch(type){
        case "READ":
            
            return {task,isDel}
        case "CREATE":
            
            return {task:"",isDel:false}
       case "UPDATE":
        const {task,isDel}= payload;
                return {task,isDel}
     
        default: 
        return state;
   
       }
   }
   
   export default Tasks;
   
   export const login =(data)=>{
       return{
           type:"LOGIN",
           payload:data
       }
   };
   
  
   
   export const logout =(data)=>{
       return{
           type:"LOGOUT",
           payload:data
       }
   };