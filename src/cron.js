import cron from "node-cron";

export function scheduleShutdown() {
   try {
      cron.schedule('0 20 * *', () => {
        console.log("App will stop");
        process.exit(0);
      });
   } catch (error) {
      console.log("Erreur during cron programmation");
   }
}

console.log('Cron task scheduled');
