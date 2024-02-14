export const API_KEY = 'AIzaSyAkx84vN2R6gl82kXJSkB35-33Ro91stxo';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
        {
            return Math.floor(value/1000)+"K";   
        }
        else{
            return value;
        }
       
}