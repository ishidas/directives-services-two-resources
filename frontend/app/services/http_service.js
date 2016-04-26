module.exports = function(app){
  app.factory('ResourceService',['$http',function($http){
    var mainRoute = 'http://localhost:3000/';
    
    function Resource (resourceName){
      this.resourceName = resourceName;
    }

    Resource.prototype.getAll = function(){
      return $http.get(mainRoute + this.resourceName)
    }

    Resource.prototype.getById = function(id){
      return $http.get(mainRoute + this.resourceName + '/' + id)
    }

    Resource.prototype.createOne = function(data){
      return $http.post(mainRoute + this.resourceName, data)
    }

    Resource.prototype.editOne = function(id, data){
      return $http.put(mainRoute + this.resourceName + '/' + id, data)
    }

    Resource.prototype.deleteOne = function(id, data){
      return $http.delete(mainRoute + this.resourceName + '/' + id, data)
    }

    return function(resourceName){
      return new Resource(resourceName);
    }
  }]);
};
