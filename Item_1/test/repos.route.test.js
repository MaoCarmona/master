/* eslint-disable no-undef */
// Import necessary functions from Jest
const { describe, it, afterEach, expect } = require('@jest/globals');

// Import modules to be tested
const { getPopularRepos } = require('../src/api/github');
const { handleError } = require('../src/utils/errorHandler.util');
const { serializeRepos } = require('../src/utils/serializer.util');
const { handleReposRoute } = require('../src/routes/repos.route');
const { githubUsername } = require('../src/config');

// Mock dependencies
jest.mock('../src/api/github');
jest.mock('../src/utils/serializer.util');
jest.mock('../src/utils/errorHandler.util');

// Create mocks for request and response
const mockRequest = {};
const mockResponse = {
    statusCode: 200,
    setHeader: jest.fn(),
    end: jest.fn()
};

// Define tests
describe('handleReposRoute', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should handle the route for fetching popular repositories', async () => {
        // Define test data
        const mockRepos = ['repo1', 'repo2'];
        const mockSerializedResponse = ['serializedRepo1', 'serializedRepo2'];

        // Mock dependent functions
        getPopularRepos.mockResolvedValue(mockRepos);
        serializeRepos.mockReturnValue(mockSerializedResponse);

        // Mock request and response
        const req = mockRequest;
        const res = mockResponse;

        // Call the function to be tested
        await handleReposRoute(req, res);

        // Check if the response was configured correctly
        expect(res.statusCode).toBe(200);
        expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
        expect(res.end).toHaveBeenCalledWith(JSON.stringify({ repositories: mockSerializedResponse }));

        // Check if mocked functions were called with correct arguments
        expect(getPopularRepos).toHaveBeenCalledWith(githubUsername);
        expect(serializeRepos).toHaveBeenCalledWith(mockRepos);
        expect(handleError).not.toHaveBeenCalled(); // Ensure handleError was not called
    });

});
