app.service('qrService', function ($http) {
        
        this.get = function(text, callback) {
            $http({method: 'GET',
                url: 'http://api.global.com/qr/' + text
            }).success(callback);
        };
});
