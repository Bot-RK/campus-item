import './css/list.css'
function pySegSort(arr) {
    if(!String.prototype.localeCompare)
        return null;
    
    var letters = "*abcdefghjklmnopqrstwxyz".split('');
    var zh = "阿八嚓哒妸发旮哈讥咔垃麻拏噢妑七呥扨它穵夕丫帀".split('');
     
    var segs = [];
    var curr;
    letters.forEach(function(item,i){
        curr = {letter: item, data:[]};
        arr.forEach(function(item2){
            if((!zh[i-1] || zh[i-1].localeCompare(item2) <= 0) && item2.localeCompare(zh[i]) === -1) {
                curr.data.push(item2);
            }
        });
        if(curr.data.length) {
            segs.push(curr);
            curr.data.sort(function(a,b){
                return a.localeCompare(b);
            });
        }
    });
    return segs;
}
export default function List() {
    
// var obj=[{
//     name: "yhh",
//     id:"111"
// },{
//     name: "222",
//     id:'3333'
// },{
//     name: "ss",
//     id:"99"
// }];
// console.log(Object.keys(obj[0])[0]);
// console.log(Object.values(obj[0])[0])
// for(var i  in  obj){
// console.log(Object.keys(obj[i])[1]);
// console.log(Object.values(obj[i])[1])
// }
//思路：将得到到数据用上面方法拆开，最后数据处理后再将data变为有多个对象的数组

  let arr=pySegSort(["大学","小学","幼儿园","中学",'高中'])
    console.log(arr)
    return (
        <><div >
            <h1 className="listName">关注列表</h1>
        </div>
            {
            arr.map((item) => {
                return (
                    <>
                        <div key={item.letter} className="letter"><h2>{item.letter.toUpperCase()}</h2></div>
                        {  
                            Array.isArray(item.data) ? item.data.map((Name) => {
                            return (
                                <div>
                                    <h1  className="11">{Name}</h1>
                                    </div>    
                            )
                            }) :
                             <div>
                                1   
                         </div>  
                        
                    }
                           
                    </>  
                    
              )}
            )
        
         }</>
        
    )
    return (
        <div>1</div>
    )
}