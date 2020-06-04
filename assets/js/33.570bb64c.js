(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{498:function(t,a,v){"use strict";v.r(a);var _=v(14),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"java-和消息队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java-和消息队列"}},[t._v("#")]),t._v(" Java 和消息队列")]),t._v(" "),v("blockquote",[v("p",[t._v("消息队列（Message Queue，简称 MQ）技术是分布式应用间交换信息的一种技术。")]),t._v(" "),v("p",[t._v("消息队列主要解决应用耦合，异步消息，流量削锋等问题，实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。")]),t._v(" "),v("p",[t._v("如果想深入学习各种消息队列产品，建议先了解一下 "),v("a",{attrs:{href:"https://github.com/dunwu/blog/blob/master/source/_posts/distributed/mq-theory.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("消息队列基本原理"),v("OutboundLink")],1),t._v(" ，有助于理解消息队列特性的实现和设计思路。")])]),t._v(" "),v("h2",{attrs:{id:"内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/mq/mq-interview.html"}},[t._v("消息队列面经")])],1),t._v(" "),v("li",[v("a",{attrs:{href:"kafka"}},[t._v("Kafka")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/mq/kafka/kafka-basic.html"}},[t._v("Kafka 应用指南基础篇")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/mq/kafka/kafka-advance.html"}},[t._v("Kafka 应用指南进阶篇")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/mq/kafka/kafka-ops.html"}},[t._v("Kafka 运维指南")])],1)])]),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/mq/rocketmq.html"}},[t._v("RocketMQ")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/mq/activemq.html"}},[t._v("ActiveMQ")])],1)]),t._v(" "),v("h2",{attrs:{id:"技术对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#技术对比"}},[t._v("#")]),t._v(" 技术对比")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("特性")]),t._v(" "),v("th",[t._v("ActiveMQ")]),t._v(" "),v("th",[t._v("RabbitMQ")]),t._v(" "),v("th",[t._v("RocketMQ")]),t._v(" "),v("th",[t._v("Kafka")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("单机吞吐量")]),t._v(" "),v("td",[t._v("万级，比 RocketMQ、Kafka 低一个数量级")]),t._v(" "),v("td",[t._v("同 ActiveMQ")]),t._v(" "),v("td",[t._v("10 万级，支撑高吞吐")]),t._v(" "),v("td",[t._v("10 万级，高吞吐，一般配合大数据类的系统来进行实时数据计算、日志采集等场景")])]),t._v(" "),v("tr",[v("td",[t._v("topic 数量对吞吐量的影响")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("topic 可以达到几百/几千的级别，吞吐量会有较小幅度的下降，这是 RocketMQ 的一大优势，在同等机器下，可以支撑大量的 topic")]),t._v(" "),v("td",[t._v("topic 从几十到几百个时候，吞吐量会大幅度下降，在同等机器下，Kafka 尽量保证 topic 数量不要过多，如果要支撑大规模的 topic，需要增加更多的机器资源")])]),t._v(" "),v("tr",[v("td",[t._v("时效性")]),t._v(" "),v("td",[t._v("ms 级")]),t._v(" "),v("td",[t._v("微秒级，这是 RabbitMQ 的一大特点，延迟最低")]),t._v(" "),v("td",[t._v("ms 级")]),t._v(" "),v("td",[t._v("延迟在 ms 级以内")])]),t._v(" "),v("tr",[v("td",[t._v("可用性")]),t._v(" "),v("td",[t._v("高，基于主从架构实现高可用")]),t._v(" "),v("td",[t._v("同 ActiveMQ")]),t._v(" "),v("td",[t._v("非常高，分布式架构")]),t._v(" "),v("td",[t._v("非常高，分布式，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用")])]),t._v(" "),v("tr",[v("td",[t._v("消息可靠性")]),t._v(" "),v("td",[t._v("有较低的概率丢失数据")]),t._v(" "),v("td",[t._v("基本不丢")]),t._v(" "),v("td",[t._v("经过参数优化配置，可以做到 0 丢失")]),t._v(" "),v("td",[t._v("同 RocketMQ")])]),t._v(" "),v("tr",[v("td",[t._v("功能支持")]),t._v(" "),v("td",[t._v("MQ 领域的功能极其完备")]),t._v(" "),v("td",[t._v("基于 erlang 开发，并发能力很强，性能极好，延时很低")]),t._v(" "),v("td",[t._v("MQ 功能较为完善，还是分布式的，扩展性好")]),t._v(" "),v("td",[t._v("功能较为简单，主要支持简单的 MQ 功能，在大数据领域的实时计算以及日志采集被大规模使用")])])])]),t._v(" "),v("p",[t._v("综上，各种对比之后，有如下建议：")]),t._v(" "),v("ul",[v("li",[t._v("一般的业务系统要引入 MQ，最早大家都用 ActiveMQ，但是现在确实大家用的不多了，没经过大规模吞吐量场景的验证，社区也不是很活跃，所以大家还是算了吧，我个人不推荐用这个了；")]),t._v(" "),v("li",[t._v("后来大家开始用 RabbitMQ，但是确实 erlang 语言阻止了大量的 Java 工程师去深入研究和掌控它，对公司而言，几乎处于不可控的状态，但是确实人家是开源的，比较稳定的支持，活跃度也高；")]),t._v(" "),v("li",[t._v("不过现在确实越来越多的公司会去用 RocketMQ，确实很不错，毕竟是阿里出品，但社区可能有突然黄掉的风险（目前 RocketMQ 已捐给 "),v("a",{attrs:{href:"https://github.com/apache/rocketmq",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache"),v("OutboundLink")],1),t._v("，但 GitHub 上的活跃度其实不算高）对自己公司技术实力有绝对自信的，推荐用 RocketMQ，否则回去老老实实用 RabbitMQ 吧，人家有活跃的开源社区，绝对不会黄。")]),t._v(" "),v("li",[t._v("所以"),v("strong",[t._v("中小型公司")]),t._v("，技术实力较为一般，技术挑战不是特别高，用 RabbitMQ 是不错的选择；"),v("strong",[t._v("大型公司")]),t._v("，基础架构研发实力较强，用 RocketMQ 是很好的选择。")]),t._v(" "),v("li",[t._v("如果是"),v("strong",[t._v("大数据领域")]),t._v("的实时计算、日志采集等场景，用 Kafka 是业内标准的，绝对没问题，社区活跃度很高，绝对不会黄，何况几乎是全世界这个领域的事实性规范。")])]),t._v(" "),v("h2",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("Kafka")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://github.com/apache/kafka",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kafka Github"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"http://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kafka 官网"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://kafka.apache.org/documentation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kafka 官方文档"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/apachecn/kafka-doc-zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kafka 中文文档"),v("OutboundLink")],1)])])]),t._v(" "),v("li",[v("strong",[t._v("ActiveMQ")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"http://activemq.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ActiveMQ 官网"),v("OutboundLink")],1)])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);