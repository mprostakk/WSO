import mongoose from "mongoose";

require("custom-env").env(true);

class Database {
  private connection: typeof mongoose | undefined;
  private readonly mongoUri: string = "mongodb://root:example@localhost:27017"; // TODO

  constructor() {}

  public run = async (): Promise<void> => {
    await this.connect();
  };

  public getStatus = () => {
    return mongoose.connection.readyState;
  };

  public getConnection = () => {
    return this.connection;
  };

  private async connect(): Promise<void> {
    if (this.getStatus() === 1) return;
    if (this.getStatus() === 2) return;
    mongoose.Promise = global.Promise;
    try {
      this.connection = await mongoose.connect(this.mongoUri, {});
      mongoose.connection.on("error", function (err) {
        console.log(err);
      });
      console.log("[db] Database connected");
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Database();
