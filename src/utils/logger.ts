import { storeData, getData, removeData } from './asyncStorage';
import apiClient from '../networking/network';
import { API_ENDPOINTS } from '../networking/endpoints';
import { StorageKey } from './constants';

const LOG_STORAGE_KEY = '@user_action_logs';

interface LogEntry {
  action: string;
  timestamp: string;
}

export interface LogPayload {
  username: string;
  data: LogEntry[];
}

export const logAction = async (action: string) => {
  const timestamp = new Date().toISOString();
  const logEntry: LogEntry = { action, timestamp };

  try {
    const existingLogs = await getData(LOG_STORAGE_KEY);
    const logsArray = existingLogs ? JSON.parse(existingLogs) : [];
    logsArray.push(logEntry);
    await storeData(LOG_STORAGE_KEY, JSON.stringify(logsArray));
  } catch (error) {
    console.error('Failed to log action:', error);
  }
};

export const getLogs = async (): Promise<LogEntry[]> => {
  try {
    const existingLogs = await getData(LOG_STORAGE_KEY);
    return existingLogs ? JSON.parse(existingLogs) : [];
  } catch (error) {
    console.error('Failed to retrieve logs:', error);
    return [];
  }
};

export const clearLogs = async () => {
  try {
    await removeData(LOG_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear logs:', error);
  }
};

export const sendLogsToApi = async (logs: LogEntry[]) => {
  const user = await getData(StorageKey.LOGIN_STORAGE_KEY);
  const parseUser = user ? JSON.parse(user) : {};
  try {
    const logPayload: LogPayload = {
      username: parseUser?.username || '',
      data: logs,
    };
    const response = await apiClient.post(API_ENDPOINTS.LOGGER, logPayload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Handle response
    if (response.status === 200) {
      console.log('Logs successfully sent:', response.data);
    } else {
      console.error('Failed to send logs:', response.data);
    }
  } catch (error) {
    console.error('Error sending logs to API:', error);
  }
};