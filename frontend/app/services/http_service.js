module.exports = function(app){
  app.factory('ResourceService',[ '$http',function($http){
    var mainRoute = 'http://localhost:3000/';

    function Resource (resourceName){
      this.resourceName = resourceName;
    }

    Resource.prototype.getContinents = function(){
      return $http.get(mainRoute + this.resourceName)
    }

    Resource.prototype.getByIdContinents = function(data){
      return $http.get(mainRoute + this.resourceName + '/' + data._id)
    }

    Resource.prototype.createContinents = function(data){
      return $http.post(mainRoute + this.resourceName, data)
    }

    Resource.prototype.editContinents = function(data){
      return $http.put(mainRoute + this.resourceName + '/' + data.id, data)
    }

    Resource.prototype.deleteContinentById = function(data){
      return $http.delete(mainRoute + this.resourceName + '/' + data.id, data)
    }

    return function(resourceName){
      return new Resource(resourceName);
    }
  }]);
};
