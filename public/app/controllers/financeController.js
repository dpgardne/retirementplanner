const app = angular.module('retirementApplication', [])

app.controller('financeController', ['$http', function($http){
  const controller = this;
  this.retires = [];
  this.edit = 1;
  this.getRetires = function(){
    $http({
      method: 'get',
      url: '/retirement'
    }).then(
      function(res){
        controller.retires = res.data
        console.log(controller.retires);
      },
      function(err){
        console.log(err);
      }
    );
  },
  this.createRetires = function(){
    $http({
      method: 'post',
      url: '/retirement',
      data: {
        portfolioType: this.portfolioType,
        largeCap: this.largeCap,
        smallCap: this.smallCap,
        fixedCap: this.fixedCap,
        cashCap: this.cashCap,
        contribution: this.contribution,
        retirementGoal: this.retirementGoal

      }
    }).then(
      function(res){
        controller.getRetires();
      },
      function(err){
        console.log(err);
      }
    );
  },
  this.editRetires = function(retires){
    $http({
      method: 'PUT',
      url: '/retirement/' + retires._id,
      data: {
        portfolioType: this.editedPortfolioType,
        largeCap: this.editedLargeCap,
        smallCap: this.editedSmallCap,
        fixedCap: this.editedFixedCap,
        cashCap: this.cashCap,
        contribution: this.editedContribution,
        retirementGoal: this.editedRetirementGoal
      }
    }).then(
      function(res){
        controller.getRetires();
      },
      function(err){
        console.log(err);
      }
    );
  },
  this.deleteRetires = function(retires){
    $http({
      method: 'delete',
      url: '/retirement/' + retires._id
    }).then(
      function(res){
        controller.getRetires();
      },
      function(err){
        console.log(err);
      }
    );
  }



  this.getRetires();
}]);
