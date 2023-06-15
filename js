window.nhanVienController = function ($scope, $http) {
  $scope.listNhanVien = [];
  $http.get("http://localhost:3000/nhanVien").then(function (response) {
    $scope.listNhanVien = response.data;
  });
   $scope.addNhanVien = function () {
    $http
      .post("http://localhost:3000/nhanVien", {
        id: $scope.id,
        hoTen: $scope.hoTen,
        tuoi: $scope.tuoi,
        diaChi: $scope.diaChi,
      })
      .then(function (response) {
        if (response.status === 201) {
          alert("Them thanh cong");
        }
      });
  };
  $scope.delete = function (id) {
    $http
      .delete("http://localhost:3000/nhanVien/" + id)
      .then(function (response) {
        if (response.status === 200) {
          alert("Xoa thanh cong");
        }
      });
  };

  $scope.update = function () {
    $http
      .put("http://localhost:3000/nhanVien/" + $scope.id, {
        hoTen: $scope.hoTen,
        tuoi: $scope.tuoi,
        diaChi: $scope.diaChi,
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("update thanh cong");
        }
      });
  };
};
