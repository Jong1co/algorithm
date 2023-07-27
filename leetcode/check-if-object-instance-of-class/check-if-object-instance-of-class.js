//솔루션을 함수를 복붙해주세요
/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
//obj = new Date()
//classFunction = Date
var checkIfInstanceOf = function (obj, classFunction) {
  if (classFunction == null || obj == null) {
    return false;
  }

  let prototypeOfClass = classFunction.prototype;
  while (obj !== null) {
    if (Object.getPrototypeOf(obj) === prototypeOfClass) {
      return true;
    }
    obj = Object.getPrototypeOf(obj);
  }
  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
