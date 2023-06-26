import {
  NavigationFailure,
  RouteLocationNormalizedLoaded,
  Router,
  RouteRecordRaw,
  useRoute,
} from 'vue-router';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {getRouterInstance} from 'boot/router';

/**
 * This is a service that is used globally throughout the application for routing
 */
export class RouterService {
  // Router instance
  router: Router;
  route: RouteLocationNormalizedLoaded;

  // eslint-disable-next-line require-jsdoc
  constructor() {
    this.router = getRouterInstance();
    this.route = useRoute();
  }

  /**
   * Adds the given string to the URl path
   * @param {string} path - path to route to
   * @param {Record<string,string>} [query] - query
   * @returns {Promise<void|NavigationFailure|undefined>} - the navigation result.
   */
  addToRoute(path: string, query: Record<string, string> = {}) {
    let currentRoute = this.route.path;
    if (currentRoute.endsWith('/')) {
      currentRoute = currentRoute.substring(0, currentRoute.length - 1);
    }
    return this.router.push({
      path: `${currentRoute}/${path}`,
      query: query,
    });
  }

  /**
   * Routes to a given route, as defined in ROUTES constant.
   * @param {RouteRecordRaw} to - the route to go to.
   * @param {Record<string, string>} [query] - props to pass to the component, if any.
   * @param {boolean} [keepQuery] - keep the current query and add new query parameters if given.
   * @param {Record<string, string>} [replaceMap] - URL parameters to replace and their values (parameters are prefixed with : in path)
   * @returns {Promise<void|NavigationFailure|undefined>} - the navigation result.
   */
  async routeTo(
    to: RouteRecordRaw,
    query?: Record<string, string>,
    keepQuery = false,
    replaceMap?: Record<string, string>
  ): Promise<void | NavigationFailure | undefined> {
    if (keepQuery) {
      return this.router.push({
        path: replaceMap ? this.replaceInPath(to.path, replaceMap) : to.path,
        query: { ...this.route.query, ...(query ?? {}) },
      });
    } else {
      return this.router.push({
        path: replaceMap ? this.replaceInPath(to.path, replaceMap) : to.path,
        query
      });
    }
  }

  /**
   * Replaces the given strings in the given path according to the map
   * @param {string} path - contains :variables, e.g. some/other/:var
   * @param {Record<string, string>} replaceMap - values to replace, e.g. {var: blubb}
   * @returns {string} - e.g some/other/blubb
   */
  private replaceInPath(path: string, replaceMap: Record<string, string>){
    let tempPath = path
    Object.keys(replaceMap).forEach((key) => {
      tempPath = tempPath.replace(`:${key}`, replaceMap[key])
    })

    return tempPath
  }

  /**
   * Adds given parameters to the URL query.
   * @param {Record<string, string>} params - query parameters.
   * @returns {void|NavigationFailure|undefined} - the navigation result.
   */
  async pushToQuery(
    params: Record<string, string>
  ): Promise<void | NavigationFailure | undefined> {
    return this.router.push({
      path: this.route.path,
      query: { ...this.route.query, ...params },
    });
  }

  /**
   * Returns the requested query parameter.
   * @param {string} key - parameter name
   * @returns {string | null} key - requested parameter
   */
  getQueryParam(key: string): string | null {
    return (this.route.query[key] as string) ?? null;
  }

  /**
   * Removes the last URL part
   * @returns {Promise<void|NavigationFailure|undefined>} - the navigation result.
   */
  pop() {
    return this.router.push({
      path: this.route.path.substring(0, this.route.path.lastIndexOf('/')),
    });
  }

  /**
   * Replaces the last URL part with the given new part.
   * Removes all Query parameter
   * @param {string} path - path to route to
   * @returns {Promise<void|NavigationFailure|undefined>} - the navigation result.
   */
  replaceLastPart(path: string) {
    return this.router.push({
      path:
        this.route.path.substring(0, this.route.path.lastIndexOf('/') + 1) +
        path,
    });
  }

  /**
   * Reload page by routing to current route
   * Removes all Query parameter
   * @returns {void} - void
   */
  reload() {
    window.location.reload()
  }
}
