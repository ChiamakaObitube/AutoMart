import cars from '../../database/objectDatabase/car';
import flags from '../../database/objectDatabase/flag';
import users from '../../database/objectDatabase/user';

class Flag {
  flagAd(data) {
    const newFlag = {
      id: flags.length + 1,
      carId: cars[cars.length - 1].id,
      reportedBy: users[users.length - 1].id,
      createdOn: Date(),
      reason: data.reason,
      description: data.description,
    };
    flags.push(newFlag);
    return newFlag;
  }

  getFlags() {
    return flags;
  }

  getSpecificFlag(id) {
    return flags.find(flag => flag.id === id);
  }
}
export default new Flag();
