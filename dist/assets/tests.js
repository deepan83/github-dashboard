define('github-dashboard/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 5, col 12, \'Ember\' is not defined.\nadapters/application.js: line 8, col 12, \'Ember\' is not defined.\nadapters/application.js: line 7, col 16, \'EmberENV\' is not defined.\n\n3 errors');
  });
});
define('github-dashboard/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('github-dashboard/tests/authenticators/torii.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - authenticators/torii.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/torii.js should pass jshint.');
  });
});
define('github-dashboard/tests/components/application-header.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/application-header.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/application-header.js should pass jshint.');
  });
});
define('github-dashboard/tests/controllers/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass jshint.');
  });
});
define('github-dashboard/tests/graphql-adapter/compiler.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - graphql-adapter/compiler.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'graphql-adapter/compiler.js should pass jshint.');
  });
});
define('github-dashboard/tests/graphql-adapter/generator.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - graphql-adapter/generator.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'graphql-adapter/generator.js should pass jshint.');
  });
});
define('github-dashboard/tests/graphql-adapter/parser.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - graphql-adapter/parser.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'graphql-adapter/parser.js should pass jshint.');
  });
});
define('github-dashboard/tests/graphql-adapter/types/field.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - graphql-adapter/types/field.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'graphql-adapter/types/field.js should pass jshint.');
  });
});
define('github-dashboard/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('github-dashboard/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('github-dashboard/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;
});
define('github-dashboard/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'github-dashboard/tests/helpers/start-app', 'github-dashboard/tests/helpers/destroy-app'], function (exports, _qunit, _githubDashboardTestsHelpersStartApp, _githubDashboardTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _githubDashboardTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _githubDashboardTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('github-dashboard/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('github-dashboard/tests/helpers/resolver', ['exports', 'github-dashboard/resolver', 'github-dashboard/config/environment'], function (exports, _githubDashboardResolver, _githubDashboardConfigEnvironment) {

  var resolver = _githubDashboardResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _githubDashboardConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _githubDashboardConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('github-dashboard/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('github-dashboard/tests/helpers/start-app', ['exports', 'ember', 'github-dashboard/app', 'github-dashboard/config/environment'], function (exports, _ember, _githubDashboardApp, _githubDashboardConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _githubDashboardConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _githubDashboardApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('github-dashboard/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('github-dashboard/tests/helpers/torii', ['exports'], function (exports) {
  exports.stubValidSession = stubValidSession;

  function stubValidSession(application, sessionData) {
    var session = application.__container__.lookup('service:session');
    var sm = session.get('stateMachine');
    Ember.run(function () {
      sm.send('startOpen');
      sm.send('finishOpen', sessionData);
    });
  }
});
define('github-dashboard/tests/models/organization.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/organization.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/organization.js should pass jshint.');
  });
});
define('github-dashboard/tests/models/pull-request.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/pull-request.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/pull-request.js should pass jshint.');
  });
});
define('github-dashboard/tests/models/repository.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/repository.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/repository.js should pass jshint.');
  });
});
define('github-dashboard/tests/models/viewer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/viewer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/viewer.js should pass jshint.');
  });
});
define('github-dashboard/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('github-dashboard/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('github-dashboard/tests/routes/fascia.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/fascia.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/fascia.js should pass jshint.');
  });
});
define('github-dashboard/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('github-dashboard/tests/routes/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass jshint.');
  });
});
define('github-dashboard/tests/routes/pull-requests.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/pull-requests.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pull-requests.js should pass jshint.');
  });
});
define('github-dashboard/tests/routes/releases.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/releases.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/releases.js should pass jshint.');
  });
});
define('github-dashboard/tests/serializers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass jshint.\nserializers/application.js: line 5, col 5, Forgotten \'debugger\' statement?\nserializers/application.js: line 4, col 23, \'options\' is defined but never used.\nserializers/application.js: line 4, col 13, \'snapshot\' is defined but never used.\nserializers/application.js: line 9, col 5, Forgotten \'debugger\' statement?\n\n4 errors');
  });
});
define('github-dashboard/tests/services/ajax.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/ajax.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/ajax.js should pass jshint.');
  });
});
define('github-dashboard/tests/test-helper', ['exports', 'github-dashboard/tests/helpers/resolver', 'github-dashboard/tests/helpers/flash-message', 'ember-qunit'], function (exports, _githubDashboardTestsHelpersResolver, _githubDashboardTestsHelpersFlashMessage, _emberQunit) {

  (0, _emberQunit.setResolver)(_githubDashboardTestsHelpersResolver['default']);
});
define('github-dashboard/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('github-dashboard/tests/torii-providers/github-oauth2.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - torii-providers/github-oauth2.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'torii-providers/github-oauth2.js should pass jshint.\ntorii-providers/github-oauth2.js: line 15, col 7, Forgotten \'debugger\' statement?\n\n1 error');
  });
});
define('github-dashboard/tests/torii/providers/github-oauth2.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - torii/providers/github-oauth2.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'torii/providers/github-oauth2.js should pass jshint.\ntorii/providers/github-oauth2.js: line 15, col 7, Forgotten \'debugger\' statement?\ntorii/providers/github-oauth2.js: line 10, col 8, \'params\' is defined but never used.\n\n2 errors');
  });
});
define('github-dashboard/tests/unit/routes/pull-requests-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:pull-requests', 'Unit | Route | pull requests', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-dashboard/tests/unit/routes/pull-requests-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/pull-requests-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pull-requests-test.js should pass jshint.');
  });
});
define('github-dashboard/tests/unit/routes/releases-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:releases', 'Unit | Route | releases', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-dashboard/tests/unit/routes/releases-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/releases-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/releases-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('github-dashboard/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
