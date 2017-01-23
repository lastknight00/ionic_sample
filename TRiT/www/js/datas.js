/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('datas', [])

.service('DatasService', [function(){
    this.datas = [
        {name:'A company', price:10000, star:4,option:'option1',options : [{value:"test1"},{value:"test2"}]},
        {name:'B company', price:60000, star:1,option:'option2',options : [{value:"test1"},{value:"test2"}]},
        {name:'C company', price:40000, star:2,option:'option3',options : [{value:"test1"},{value:"test2"}]},
        {name:'D company', price:30000, star:5,option:'option4',options : [{value:"test1"},{value:"test2"}]},
        {name:'E company', price:50000, star:3,option:'option5',options : [{value:"test1"},{value:"test2"}]},
        {name:'F company', price:20000, star:0,option:'option6',options : [{value:"test1"},{value:"test2"}]}
        ];
    
}]);
