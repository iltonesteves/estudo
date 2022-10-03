/*
 O padrão Iterator é um padrão de design muito comumente usado no ambiente de programação Java e .Net. 
Este padrão é usado para obter uma maneira de acessar os elementos de um objeto de coleção de maneira seqüencial 
sem a necessidade de conhecer sua representação subjacente.

O padrão do iterador se enquadra na categoria de padrão comportamental.

Implementação
Vamos criar uma interface Iterator que narra o método de navegação e uma interface Container que retorna o iterator . 
As classes concretas que implementam a interface Container serão responsáveis ​​por implementar a interface Iterator e usá-la

IteratorPatternDemo , nossa classe de demonstração usará NamesRepository , 
uma implementação de classe concreta para imprimir um Names armazenado como uma coleção em NamesRepository .

 */
package Iterador;

/**
 *
 * @author ghandi
 */
public interface Iterator {
   public boolean hasNext();
   public Object next();
}