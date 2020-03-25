import uuid from 'uuid/v1';
import car from '../src/utils/car';

jest.mock('uuid/v1');

describe('addProdToCar', () => {
  test('check_execute_uuid', () => {
    car.addProdToCar('apple', 3);

    // 斷言是否有執行過
    // 沒有的話代表 uuid 依賴有問題
    // 與以下內容要測的事情一樣： 執行次數為一
    // expect(uuid.mock.calls.length).toBe(1);
    expect(uuid).toHaveBeenCalled();
  });
});
