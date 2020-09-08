import { environment } from 'src/environments/environment';

export class UriConstants {

  public static readonly BASE_URL = environment.baseUrl;

  public static readonly USER_SAVE = environment.baseUrl + 'user/save';

  public static readonly USER_FIND_ALL = environment.baseUrl + 'user/findAll';

  public static readonly USER_DELETE = environment.baseUrl + 'user/delete';

  public static readonly LOGIN = environment.baseUrl + 'login';

  public static readonly VERIFY_TOKEN = environment.baseUrl + 'verifyToken';
}
