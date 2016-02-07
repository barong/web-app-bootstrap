// http://ofnir.net/posts/use-compilestatic-for-the-whole-gradle-21-project.html
// read before removing - http://java-performance.info/static-code-compilation-groovy-2-0/
// use @CompileDynamic for single class

withConfig(configuration) {
    ast(groovy.transform.CompileStatic)
}