import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import schema from './fragmentTypes.json' //<= contain schema of my graphql api
const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: schema
});

export default() => {
    return {
        httpEndpoint: 'https://portfolio-staging.roberskine.com/api', // live
        cache: new InMemoryCache({fragmentMatcher})
    }
}