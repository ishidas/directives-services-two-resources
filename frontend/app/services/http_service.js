module.exports = function(app){
  app.factory('ResourceService',[ '$http',function($http){
    var mainRoute = 'http://localhost:3000/';

    function Resource (resourceName){
      this.resourceName = resourceName;
    }

    Resource.prototype.getContinents = function(){
      return $http.get(mainRoute + this.resourceName)
    }

    Resource.prototype.getByIdContinents = function(id){
      return $http.get(mainRoute + this.resourceName + '/' + id)
    }

    Resource.prototype.createContinents = function(data){
      return $http.post(mainRoute + this.resourceName, data)
    }

    Resource.prototype.editContinents = function(id, data){
      return $http.put(mainRoute + this.resourceName + '/' + id, data)
    }

    Resource.prototype.deleteContinent = function(id, data){
      return $http.delete(mainRoute + this.resourceName + '/' + id, data)
    }

    return function(resourceName){
      return new Resource(resourceName);
    }
  }]);
};
