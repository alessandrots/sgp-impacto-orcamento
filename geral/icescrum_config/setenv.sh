#!/bin/sh



# Licensed to the Apache Software Foundation (ASF) under one or more

# contributor license agreements.  See the NOTICE file distributed with

# this work for additional information regarding copyright ownership.

# The ASF licenses this file to You under the Apache License, Version 2.0

# (the "License"); you may not use this file except in compliance with

# the License.  You may obtain a copy of the License at

#

#     http://www.apache.org/licenses/LICENSE-2.0

#

# Unless required by applicable law or agreed to in writing, software

# distributed under the License is distributed on an "AS IS" BASIS,

# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

# See the License for the specific language governing permissions and

# limitations under the License.



# -----------------------------------------------------------------------------

#  Set JAVA_HOME or JRE_HOME if not already set, ensure any provided settings

#  are valid and consistent with the selected start-up options and set up the

#  endorsed directory.

# -----------------------------------------------------------------------------



export CATALINA_OPTS="-Dicescrum.log.dir=/home/alessandrots/desenvolvimento/java/tomcat7.0.68/logs -Duser.timezone=UTC -Dicescrum_config_location=/opt/icescrum/config.groovy -Xmx512m -XX:MaxPermSize=256m -Djava.awt.headless=true -server"