import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7n7j80ygt01z70ontdn69/master',
    cache: new InMemoryCache()
})
