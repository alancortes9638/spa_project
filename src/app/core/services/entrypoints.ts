

export class EntryPoints {
  
  //static host : string = 'http://localhost:5000/';
//  static host : string = 'https://apiwalkers.scalelink.com/';


  host: string = "";

  constructor()
  {
  }



  public hostName: string = this.host +'api/';    
  
  public loginUrl = this.hostName + 'Users/CreateToken';
  public requestResetPasswordUrl = this.hostName + 'Users/RequestResetPassword';
  public resetPasswordUrl = this.hostName + 'Users/ResetPassword';


  public getCurrentReadingsUrl = this.hostName +'Dashboard/GetCurrentReadings?scales=%s';
  public getLastStatusUrl = this.hostName +'Dashboard/GetLastStatus?plant_id=%d';
  public getProductionAnalyticsUrl = this.hostName +'Dashboard/GetProductionAnalytics?plant_id=%d';

  public getTruckFeedUrl = this.hostName +'TrucksFeeded/GetTrucksFeededCount?plant_id=%d';
  
  public getCurrentShelfUrl = this.hostName +'Plants/GetCurrentShelf?plant_id=%d';
  

  
  public getLivePointsUrl = this.hostName +'Records/GetLivePoints?scale_ids=%s&seconds=%d';
  public getDailyTotalsByScaleUrl = this.hostName+'Records/GetDailyTotalsByScale?scale_ids=%s&startDate=%s&endDate=%s';
  public getLinePointsUrl = this.hostName+'Records/GetLinePoints?scale_ids=%s&startDate=%s&endDate=%s';
  
  public getDailyTotalReportUrl = this.hostName+'Reports/GetDailyTotalsReport?scale_id=%s&startDate=%s&endDate=%s';
  public getWeeklyReportUrl = this.hostName+'Reports/GetWeeklyReport?scale_id=%s&startDate=%s&endDate=%s';
  

  
  
  public listenDashboardMessagesUrl = this.host +'dashboard_messages';


  public getUserPlantsUrl = this.hostName+'Plants/GetUserPlants';
  public createReducedHoursUrl = this.hostName+'Plants/AddReducedHoursOnWeek';
  

  public getPlantShiftsUrl = this.hostName+'Shifts/GetPlantShiftsByPlant?plant_id=%d';
  
  
  public getScalesByPlantUrl = this.hostName+'Scales/GetScaleInfoByPlant?plants=%s';
  public getScalesDowntimeByPlantUrl = this.hostName+'Scales/GetScalesDowntimeByPlant?plant_id=%d';
  public getPlantScalesUrl = this.hostName+'Scales/GetScalesByPlant?plant_id=%s';
  
  

  public getDowntimeUrl = this.hostName+'ScaleStatus/GetDowntimes?plant_id=%d&start_date=%s&end_date=%s';
  public getScaleStatusUrl = this.hostName+'ScaleStatus/GetScaleStatus?scale_id=%d&shift_id=%d&start_date=%s&end_date=%s';
  public getDashboardtatusUrl = this.hostName+'Dashboard/GetDashboardtatus?plant_id=%d';
  


  public getPlantTargetsUrl = this.hostName+'Targets/GetPlantTargets?plant_id=%d&startDate=%s&endDate=%s';

  public getPeriodAPRUrl = this.hostName+'Reports/GetPeriodAPR?plant_id=%d&shift_id=%d&startDate=%s&endDate=%s';
  public getPerformanceReportUrl = this.hostName+'Reports/GetPerformanceReport?plant_id=%d&date=%s';
  public getDowntimeAnalysisDataUrl = this.hostName+'Reports/GetDowntimeAnalysisData?plant_id=%d&startDate=%s&endDate=%s';

  public getPlantProductionsUrl = this.hostName+'Targets/GetPlantProductions?plant_id=%d';
  public getTargetsByProductionUrl = this.hostName+'Targets/GetTargetsByProduction?production_id=%d';
  public getProgrammedDowntimesUrl = this.hostName+'Targets/GetProgrammedDowntimesByProduction?production_id=%d';
  public updateProductionUrl = this.hostName+'Productions/UpdateProduction';
  public createProductionUrl = this.hostName+'Productions/CreateProduction';

}

