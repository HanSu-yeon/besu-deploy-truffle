//스마트 계약의 마이그레이션을 관찰하기 위해 Migrations.sol컨트랙트의 배포를 관리하며,
//나중에 변경되지 않은 컨트랙트를 이중 마이그레이션하지않도록 보장한다

var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};