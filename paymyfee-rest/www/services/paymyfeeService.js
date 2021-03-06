    var paymyServiceModule = angular.module('paymyServiceModule', [])
    paymyServiceModule.service('paymyService', function ($q, $location, $window,$http) {    
        //this.serverURLPrefix="http://192.168.116.255:3000/v1/";
        this.serverURLPrefix = $location.protocol()+'://'+$window.location.host+'/v1/';  
        $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
         $http.defaults.headers.post['dataType'] = 'json';
        this.loadrecipients = function(){
                var deferred = $q.defer();   
                    var url= this.serverURLPrefix+"recipients";
                    $http({
                        method: 'GET',
                        url: url
                        }).then(function successCallback(response) {
                            console.log(response);
                            //alert(response);
                            deferred.resolve(respone);
                        }, function errorCallback(response) {
                            console.log(response);
                            deferred.reject(respone);
                        });
                return deferred.promise;    
        };
        
        
        this.login = function(data){
              var deferred = $q.defer(); 
                    var url= this.serverURLPrefix+"login";              
                    $http({
                        method: 'POST',
                        data: data,
                        url: url,
                        headers: { "Content-Type": "application/json" }
                        }).then(function successCallback(response) {
                            console.log(response);
                           // alert(response);
                            deferred.resolve(response);
                        }, function errorCallback(response) {
                            console.log(response);
                            deferred.reject(response);
                        });
                return deferred.promise;  
        }
        this.register = function(data){
            var deferred = $q.defer(); 
                    var url= this.serverURLPrefix+"register";              
                     $http({
                        method: 'POST',
                        data:  JSON.stringify(data),
                        dataType: 'json', 
                        crossDomain:true,
                        headers: { "Content-Type": "application/json" },
                        url: url
                        }).then(function successCallback(response) {
                            console.log(response);
                            //alert("Accept");
                            deferred.resolve(response);
                        }, function errorCallback(response) {
                            console.log(response);
                            //alert("Reject");
                            deferred.reject(response);
                        });
                return deferred.promise;  
        };
        
        this.saveStudent = function(data){
            var deferred = $q.defer(); 
                    var url= this.serverURLPrefix+"recipients";              
                     $http({
                        method: 'POST',
                        data:  JSON.stringify(data),
                        dataType: 'json', 
                        crossDomain:true,
                        headers: { "Content-Type": "application/json" },
                        url: url
                        }).then(function successCallback(response) {
                            console.log(response);
                            //alert("Accept");
                            deferred.resolve(response);
                        }, function errorCallback(response) {
                            console.log(response);
                              //alert("Reject");
                            deferred.reject(response);
                        });
                return deferred.promise;  
        };
        
        this.saveSchoolStudent = function(data){
            var deferred = $q.defer(); 
                    var url= this.serverURLPrefix+"recipients/batch";              
                     $http({
                        method: 'POST',
                        data:  data,
                        dataType: 'json', 
                        crossDomain:true,
                        headers: { "Content-Type": "application/json" },
                        url: url
                        }).then(function successCallback(response) {
                            console.log(response);
                            //alert("Accept");
                            deferred.resolve(response);
                        }, function errorCallback(response) {
                            console.log(response);
                              //alert("Reject");
                            deferred.reject(response);
                        });
                return deferred.promise;  
        };
        
        
        
    });