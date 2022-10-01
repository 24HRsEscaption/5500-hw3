// a library to send get/send request
import axios from 'axios';
import Store from '../../utils/store/store';
import HttpService from './http.service';

describe('services > http', () => {
  describe('HttpService', () => {

    let httpService: HttpService;

    beforeAll(() => {
      httpService = new HttpService();
    });

    afterAll(() => {
      (<any>httpService) = undefined;
    });

    describe('getData()', () => {

      it('should invoke axios.get() with "myUrl"', async () => {
        // When a stub gets invoked, it does not invoke the actual function, but returns the desired value instead.
        // Q1： what is the desired value mean here? 
        const getStub = jest.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: {} });

        await httpService.getData();

        expect(getStub).toHaveBeenCalledWith('/myUrl');
      });
  
      it('should return the status as 200', async () => {
        // When a stub gets invoked, it does not invoke the actual function, but returns the desired value instead. 
        const getStub = jest.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: {} });
  
        const response = await httpService.getData();
  
        expect(response.status).toEqual(200);
  
        getStub.mockRestore();
  
      });

    });
    




    describe('getDataAndSetStore()', () => {

      it('should invoke axios.get() with "myUrl"', async () => {

        const getStub = jest.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: {} });
        
        // Q2：為什麼這裡用await
        // Q3: 這個function的作用？ 和下面的getstub的關係
        await httpService.getDataAndSetStore();
  
        expect(getStub).toHaveBeenCalledWith('/myUrl');
  
      });
  
      it('should set the data in store', async () => {
        const addDataStub = jest.spyOn(Store, 'setData').mockImplementation();
        // return a promise
        const getStub = jest
          .spyOn(axios, 'get')
          .mockResolvedValue({ status: 200, data: 'testData' });
        // use fake timers to simulate passage of time to test such asynchronous behavior. 
        jest.useFakeTimers();

        httpService.getDataAndSetStore();
        jest.runAllTimers();
        await Promise.resolve();

        expect(addDataStub).toHaveBeenCalledWith('testData');
        // Q4: 不理解
        addDataStub.mockRestore();
        getStub.mockRestore();
        jest.useRealTimers();
      });

    });

  });
});
